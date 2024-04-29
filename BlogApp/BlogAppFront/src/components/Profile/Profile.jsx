import React, { useState, useEffect } from 'react'

function Profile() {
    const [user, setUser] = useState(null)
    const getUserData = () => {
        let data = localStorage.getItem('user')
        if (data) {
            setUser(JSON.parse(data))
        }
    }

    useEffect(() => {
        getUserData()
    }, [])
    return <div>{user?.email}</div>
}

export default Profile
