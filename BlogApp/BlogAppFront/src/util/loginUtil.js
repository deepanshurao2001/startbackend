import axios from 'axios'

const getLoggedInUserDetails = async (navigate, url) => {
    let token = localStorage.getItem('token')

    if (!token) {
        navigate('/') // Redirect to login poge
        return
    }

    let data = await axios.post('http://localhost:3000/api/getUser', {
        token: token,
    })

    console.log('Data: ', data)
    let user = data.data.data // axiosVariable.axiosData.ourNodeJsData
    console.log('User: ', user)
    localStorage.setItem('user', JSON.stringify(user))

    if (!user) {
        navigate('/') // Redirect to login poge
    } else {
        navigate(url)
    }
}

export { getLoggedInUserDetails }
