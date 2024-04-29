import { Editor } from '@tinymce/tinymce-react'
import '../TextEditor/TextEditor.css'
import React, { useRef, useState } from 'react'

function TextEditor({ onChange }) {
    //const [description, setDescription] = useState('')
    //console.log(description)
    const editorRef = useRef(null)
    const handleEditorChange = (content) => {
        if (onChange) {
            onChange(content)
        }
    }
    return (
        <>
            <Editor
                apiKey="2si1v8w0q093c1eh9qjki2cmu3erw3ys4yl5623h7k2qbt7l"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue="<p></p>"
                init={{
                    height: 500,
                    menubar: false,
                    // plugins: [
                    //     'ai preview powerpaste casechange footnotes tinycomments searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed advtemplate codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker mergetags a11ychecker editimage help formatpainter permanentpen pageembed charmap quickbars linkchecker emoticons advtable export mentions typography markdown importword',
                    // ],
                    toolbar:
                        'undo redo | importword | aidialog aishortcuts | blocks fontsizeinput | bold italic | align numlist bullist | link image | table media pageembed | lineheight  outdent indent | strikethrough forecolor backcolor formatpainter removeformat | charmap emoticons checklist | code fullscreen preview | save print export | pagebreak anchor codesample footnotes mergetags | addtemplate inserttemplate | addcomment showcomments | ltr rtl casechange | spellcheckdialog a11ycheck',
                    importword_service_url: 'add.url.here',
                    templates: [],
                    content_style:
                        'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                }}
                onChange={(e) => handleEditorChange(e.target.getContent())}
            />
            {/* <button onClick={log}>Log editor content</button> */}
        </>
    )
}

export default TextEditor
