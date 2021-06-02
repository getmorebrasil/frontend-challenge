/* eslint-disable no-param-reassign */
import { AxiosInstance } from 'axios'

export function applyToken(token: string, client: AxiosInstance): void {
  client.defaults.headers.nextAuthorization = `Bearer ${token}`
}

export function unstickToken(client: AxiosInstance): void {
  delete client.defaults.headers.nextAuthorization
}

const actions = { applyToken, unstickToken }
export default actions
