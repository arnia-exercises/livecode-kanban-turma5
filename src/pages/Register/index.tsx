import { useState } from "react"
import { Button } from "../../components/Button/styles"
import { Input, Label } from "../../components/Input/styles"
import * as S from "../../components/UserFormContainer/styles"
import { CreateUserService } from "../../services/user"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    passwordRepeat: "",
    email: "",
  })

  const navigate = useNavigate()

  const isFormCompleted = () =>
    !userData.email ||
    !userData.name ||
    !userData.password ||
    !userData.passwordRepeat

  const doRegister = async () => {
    const { name, password, passwordRepeat, email } = userData

    if (password !== passwordRepeat) return

    const response = await CreateUserService(email, password, name)

    if (response?.success) {
      navigate("/")
    }
  }

  return (
    <S.ExternalContainer>
      <S.Container screen="REGISTER">
        <S.Title>Arnia Trello</S.Title>
        <S.SubTitle>Cadastro</S.SubTitle>
        <S.InputContainer>
          <Label>Nome completo</Label>
          <Input
            value={userData.name}
            onChange={(event) =>
              setUserData({ ...userData, name: event.target.value })
            }
          />
        </S.InputContainer>
        <S.InputContainer>
          <Label>E-mail</Label>
          <Input
            value={userData.email}
            onChange={(event) =>
              setUserData({ ...userData, email: event.target.value })
            }
          />
        </S.InputContainer>
        <S.InputContainer>
          <Label>Senha</Label>
          <Input
            value={userData.password}
            onChange={(event) =>
              setUserData({ ...userData, password: event.target.value })
            }
          />
        </S.InputContainer>
        <S.InputContainer>
          <Label>Repita a sua senha</Label>
          <Input
            value={userData.passwordRepeat}
            onChange={(event) =>
              setUserData({ ...userData, passwordRepeat: event.target.value })
            }
            onBlur={() => {
              if (userData.password !== userData.passwordRepeat) {
                alert("Senhas não iguais")
                // validação de senhas diferentes
              }
            }}
          />
        </S.InputContainer>
        <Button
          variant="MAIN"
          disabled={isFormCompleted()}
          onClick={doRegister}
        >
          CADASTRAR
        </Button>
      </S.Container>
    </S.ExternalContainer>
  )
}

export default Register
