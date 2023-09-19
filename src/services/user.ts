import { AxiosResponse, isAxiosError } from "axios"
import api from "./config"

type LoginApi = {
  token: string
  name: string
}

export const LoginService = async (email: string, password: string) => {
  try {
    const userData: AxiosResponse<LoginApi> = await api.post(
      "/api/user/login",
      {
        email,
        password,
      }
    )

    const { token, name } = userData.data

    localStorage.setItem("token", token)
    localStorage.setItem("name", name)
    api.defaults.headers.Authorization = token
    return { success: true, message: name }
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.status === 404) {
        return { success: false, message: "Usuário não encontrado" }
      }
      if (error.status === 401) {
        return { success: false, message: "Senha incorreta" }
      }
    }
  }
}

export const CreateUserService = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const response: AxiosResponse<{ message: string }> = await api.post(
      "/api/user",
      {
        email,
        password,
        name,
      }
    )

    return { success: true, message: response.data.message }
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.status === 400) {
        return { success: false, message: error.response?.data.message }
      }
    }
  }
}
