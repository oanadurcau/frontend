class User {
  userId: string
  username: string
  type: number

  constructor(userId: string, username: string, type: number) {
    this.userId = userId
    this.username = username
    this.type = type
  }

  static fromJson(json: any): User {
    return new User(json.user_id, json.username, json.type)
  }
}
export default User
