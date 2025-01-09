

export async function loginWithUsernameAndPassword(username: string, password: string) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username,
            password: password
        })
    }

    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, requestOptions)

    return await response.json()
}
