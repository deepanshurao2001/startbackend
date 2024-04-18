import React from 'react'
import './LogIn.css'
import Box from '@mui/material/Box'

export default function LogIn() {
    return (
        <div style={{
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/04/06/10/08/background-1311251_1280.jpg)',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed', // Fixed background
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <Box sx={{display: 'flex', backgroundColor: "white" , borderRadius:'10px', opacity: '0.7' }}>
            <Box sx={{display: 'flex', height: '500px', width: '380px', justifyContent:'center' }}> LogIn Part </Box>
            <Box sx={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2020/05/05/16/01/background-bokeh-5133696_1280.jpg')", backgroundSize: 'cover' ,height: '500px', width: '380px', margin:'10px', borderRadius: '10px'}}></Box>
        </Box>
        </div>
    )
}