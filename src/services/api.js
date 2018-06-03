import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://hyper-swipe.herokuapp.com`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
