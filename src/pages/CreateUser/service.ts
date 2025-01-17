interface ICreateUser {
    name: string
    username: string
    password: string
    photoUrl: string
}

export async function createUser(user: ICreateUser) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }

    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/create/user`, requestOptions)

    return await response.json()

}