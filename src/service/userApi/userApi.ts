import apiConfig from '../baseApi'

const userApi = {
  // Lấy danh sách người dùng
  getListUser: () => {
    return apiConfig.get('/users')
  },

  deleteUser: (id: string) => {
    return apiConfig.delete(`/users/${id}`)
  },

  addUser: (newUser: {
    name: string
    hometown: string
    date: string
    email: string
  }) => {
    return apiConfig.post('/users', newUser)
  },

  updateUser: (
    id: string,
    updatedUser: {
      name: string
      hometown: string
      date: string
      email: string
    },
  ) => {
    return apiConfig.put(`/users/${id}`, updatedUser)
  },
}

export default userApi
