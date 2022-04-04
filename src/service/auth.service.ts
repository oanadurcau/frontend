class AuthService {
  static url = 'http://localhost:3000/api/user'

  static async signup(username: string, password: string) {
    console.log('signup >>>', username, password)
    const body = JSON.stringify({ username, password, type: 0 })

    const response = await fetch(AuthService.url, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log('signup <<<', await response.json())
  }
}

export default AuthService
