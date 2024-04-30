import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'

function Profile() {
    const [user, setUser] = useState(null)
    const [editable, setEditable] = useState(false)
    const [formData, setFormData] = useState({})

    const getUserData = () => {
        let data = localStorage.getItem('user')
        if (data) {
            setUser(JSON.parse(data))
            setFormData(JSON.parse(data))
        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    const handleEdit = () => {
        setEditable(true)
    }

    const handleSave = () => {
        // Save form data to localStorage or send to backend
        localStorage.setItem('user', JSON.stringify(formData))
        setUser(formData)
        setEditable(false)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    //return <div>{user?.email}</div>
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
            }}
        >
            <FormControl>
                <TextField
                    name="name"
                    label="full name"
                    variant="outlined"
                    value={formData?.fullName || ''}
                    onChange={handleChange}
                    disabled={!editable}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="username"
                    label="Username"
                    variant="outlined"
                    value={formData?.userName || ''}
                    onChange={handleChange}
                    disabled={!editable}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    value={formData?.email || ''}
                    onChange={handleChange}
                    disabled={!editable}
                    fullWidth
                    margin="normal"
                />
                {editable ? (
                    <Button variant="contained" onClick={handleSave}>
                        Save
                    </Button>
                ) : (
                    <Button variant="contained" onClick={handleEdit}>
                        Edit
                    </Button>
                )}
            </FormControl>
        </Box>
    )
}

export default Profile
