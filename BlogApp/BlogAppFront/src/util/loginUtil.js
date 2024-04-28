const checkUserLoginStatus = (navigate) => {
    let token = localStorage.getItem('token')
    if (token) {
        navigate('/mainspace')
    } else {
        navigate('/')
    }
}

export { checkUserLoginStatus }
