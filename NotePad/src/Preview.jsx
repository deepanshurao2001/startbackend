import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import Markdown from 'react-markdown'
import axios from 'axios';
  

function Preview() {
  const [content, setContent] = useState("")
  let {noteId } = useParams()
  const navigate = useNavigate()

  const updateNote = async () => {
    
    let {data} = await axios.post('http://localhost:3000/notes/preview/previewUpdate',{noteId: noteId , updateBody: {
    content : content
    }})

    navigate('/')

  }

  const getNoteContent =async () => {
      
      let {data} = await axios.post('http://localhost:3000/notes/preview',{noteId: noteId})

      let note = data.data
      setContent(note.content)
  }

  useEffect(() => {

    if(noteId) {
      getNoteContent()
    }
    
  }, [noteId])

  const markdown = '# Hi, *Pluto*!'

  return (
    <div style={{display:'flex'}}>
    <button onClick={() => {updateNote()}}>Save</button>
    <div style={{flex:'0.5'}}>
      <textarea  value={content} style={{width:'100%', height:'70vh'}}  onChange ={(e) => {setContent(e.target.value)}} ></textarea>
    </div>
    <div style={{flex:'0.5'}}>

    <Markdown>{content}</Markdown>
      
    </div>
    </div>
  )
}

export default Preview