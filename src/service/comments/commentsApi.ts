import apiConfig from '../baseApi'
const commentApi = {
  getListComment() {
    return apiConfig.get('/comments')
  },
}
export default commentApi
