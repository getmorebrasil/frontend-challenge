import axios from 'axios'

const next = axios.create({
  baseURL: process.env.HOST,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

export default next
