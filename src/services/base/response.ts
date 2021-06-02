/* eslint-disable @typescript-eslint/no-explicit-any */
const success = (data: any, status: number) => ({
  data,
  status,
  success: status === 200 || status === 201,
})

const error = (requestError: any) => ({
  success: false,
  status: requestError.response.status,
  errors: requestError.response.data.message,
})

const response = { success, error }
export default response
