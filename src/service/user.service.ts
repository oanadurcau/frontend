import User from '../entity/user2'

class UserService {
  static url = 'http://localhost:3000/api/user'

  static async getAll(): Promise<User[]> {
    console.log('getAll >>>')
    const response = await fetch(UserService.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const usersJson: any[] = await response.json()
    console.log('getAll <<<', usersJson)
    return usersJson.map((userJson) => User.fromJson(userJson))
  }
}

export default UserService
