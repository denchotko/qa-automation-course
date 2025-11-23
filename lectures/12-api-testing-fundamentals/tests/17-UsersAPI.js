// Similar to Page Object Model, but for API endpoints
export class UsersAPI {
  constructor(request) {
    this.request = request;
    this.baseUrl = "https://jsonplaceholder.typicode.com";
  }

  // GET all users
  async getAllUsers() {
    const response = await this.request.get(`${this.baseUrl}/users`);
    return {
      status: response.status(),
      data: await response.json(),
    };
  }

  // GET single user
  async getUserById(userId) {
    const response = await this.request.get(`${this.baseUrl}/users/${userId}`);
    return {
      status: response.status(),
      data: await response.json(),
    };
  }

  // POST create user
  async createUser(userData) {
    const response = await this.request.post(`${this.baseUrl}/users`, {
      data: userData,
    });
    return {
      status: response.status(),
      data: await response.json(),
    };
  }

  // PUT update user
  async updateUser(userId, userData) {
    const response = await this.request.put(`${this.baseUrl}/users/${userId}`, {
      data: userData,
    });
    return {
      status: response.status(),
      data: await response.json(),
    };
  }

  // DELETE user
  async deleteUser(userId) {
    const response = await this.request.delete(
      `${this.baseUrl}/users/${userId}`
    );
    return {
      status: response.status(),
      data: await response.json(),
    };
  }

  // Search users by name
  async searchUsersByName(name) {
    const allUsers = await this.getAllUsers();
    return allUsers.data.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}
