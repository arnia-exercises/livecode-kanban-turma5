import { AxiosResponse, isAxiosError } from "axios"
import api from "./config"

const defaultErros = (error: unknown) => {
  if (isAxiosError(error)) {
    switch (error.status) {
      case 401: throw new Error ('Usuário não está logado ou possui um token válido')
      default:  throw new Error ('Ocorreu um erro em nossos servidores')
    }
  }
}

export const getAllCards = async (): Promise<Cards> => {
  try {
    const response: AxiosResponse<Cards> = await api.get('/api/card', {
      headers: {
        'Authorization': localStorage.getItem('token') ?? ''
      }
    })

    return response.data
  } catch (error) {
    defaultErros(error)
  }

  throw new Error ('Ocorreu um erro em nossos servidores')
}

export const createCard = async (data: CreateCard): Promise<Cards> => {
  try {
    const response: AxiosResponse<Cards> = await api.post('/api/card', data, {
      headers: {
        'Authorization': localStorage.getItem('token') ?? ''
      }
    })

    return response.data
  } catch (error) {
    defaultErros(error)
  }

  throw new Error ('Ocorreu um erro em nossos servidores')
}

export const updateCard = async (id: string, data: UpdateCard): Promise<Cards> => {
  try {
    const response: AxiosResponse<Cards> = await api.put(`/api/card/${id}`, data, {
      headers: {
        'Authorization': localStorage.getItem('token') ?? ''
      }
    })

    return response.data
  } catch (error) {
    defaultErros(error)
  }

  throw new Error ('Ocorreu um erro em nossos servidores')
}

export const deleteCard = async (id: string): Promise<Cards> => {
  try {
    const response: AxiosResponse<Cards> = await api.delete(`/api/card/${id}`, {
      headers: {
        'Authorization': localStorage.getItem('token') ?? ''
      }
    })

    return response.data
  } catch (error) {
    defaultErros(error)
  }

  throw new Error ('Ocorreu um erro em nossos servidores')
}
