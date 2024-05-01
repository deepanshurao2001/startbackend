import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'

function Profile() {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [fullname, setFullName] = useState('')

    const [user, setUser] = useState(null)
    const [editable, setEditable] = useState(false)

    const getUserData = () => {
        let data = localStorage.getItem('user')
        if (data) {
            let _user = JSON.parse(data)
            setUser(_user)
            setFullName(_user.fullName)
            setUserName(_user.userName)
            setEmail(_user.email)
        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    const handleEdit = () => {
        setEditable(true)
    }

    const handleSave = () => {
        // Implement save logic here
        setEditable(false) // Disable editing after saving
    }

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
                    name="fullName"
                    label="Full Name"
                    variant="outlined"
                    value={fullname}
                    disabled={!editable}
                    onChange={(e) => setFullName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="userName"
                    label="Username"
                    variant="outlined"
                    value={username}
                    disabled={!editable}
                    onChange={(e) => setUserName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    value={email}
                    disabled={!editable}
                    onChange={(e) => setEmail(e.target.value)}
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
