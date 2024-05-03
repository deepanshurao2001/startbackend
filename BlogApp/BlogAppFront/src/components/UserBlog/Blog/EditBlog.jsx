import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import NavBar from '../../common/NavBar'
import { getLoggedInUserDetails } from '../../../util/loginUtil'
import { useNavigate } from 'react-router-dom'
import { Stack, TextField, Typography } from '@mui/material'

const EditBlog = () => {
    const [title, setTitle] = useState('')
    const [description, setDesctiption] = useState('')
    const [tags, setTags] = useState([])
    const [selectedTags, setSelectedTags] = useState([])

    const navigate = useNavigate()
    useEffect(() => {
        getLoggedInUserDetails(navigate, '/blog')
    }, [])

    return (
        <Box>
            <NavBar />
            <Box>
                <Stack direction="column" spacing={2}>
                    <Typography variant="h6">Blog Title</Typography>
                    <TextField
                        fullWidth
                        placeholder="Eg. Machine Learning"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Stack>
            </Box>
        </Box>
    )
}

export default EditBlog
