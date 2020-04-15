import React from 'react'
import ReactDOM from 'react-dom'
import { Editor, EditorState, RichUtils, convertToRaw, DraftEditorCommand } from 'draft-js'

const MyEditor = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  )

  const handleKeyCommand = (command: DraftEditorCommand, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)

    if (newState) {
      setEditorState(newState)
      return 'handled'
    }

    return 'not-handled'
  }

  return <Editor
    editorState={editorState}
    onChange={(state) => {
      console.log(convertToRaw(state.getCurrentContent()))
      setEditorState(state)
    }}
    handleKeyCommand={handleKeyCommand}
  />
}

ReactDOM.render(<MyEditor />, document.getElementById('container'))
