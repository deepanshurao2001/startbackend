import React from 'react'
import CreateButton from './CreateButton/CreateButton'
import Box from '@mui/material/Box'
function UserBlog() {
    return (
        <Box sx={{ position: 'relative', width: '100%', height: '90vh' }}>
            <CreateButton />
        </Box>
    )
}

export default UserBlog
