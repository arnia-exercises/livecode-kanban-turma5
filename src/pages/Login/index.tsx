import { useState } from "react"
import { Button } from "../../components/Button/styles"
import { Input, Label } from "../../components/Input/styles"
import * as S from "../../components/UserFormContainer/styles"
import { LoginService } from "../../services/user"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const doLogin = async () => {
    const response = await LoginService(email, password)
    if (response?.success) {
      navigate("kanban")
    }
  }

  return (
    <S.ExternalContainer>
      <S.Container screen="LOGIN">
        <S.Title>Arnia Trello</S.Title>
        <S.InputContainer>
          <Label>E-mail</Label>
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </S.InputContainer>
        <S.InputContainer>
          <Label>Senha</Label>
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </S.InputContainer>
        <Button variant="MAIN" onClick={doLogin} disabled={!email || !password}>
          ENTRAR
        </Button>
        <S.StyledLink to="cadastro">Cadastre-se</S.StyledLink>
      </S.Container>
    </S.ExternalContainer>
  )
}

export default Login
