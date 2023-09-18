import { Link } from "react-router-dom"
import styled from "styled-components"

export const ExternalContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 0px;
`

export const Container = styled.div<{ screen: "LOGIN" | "REGISTER" }>`
  background: ${({ theme }) => theme.colors.lightBlue};
  width: 567px;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ screen }) => (screen === "LOGIN" ? "50px" : "20px")};
  border-radius: 20px;
`

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.white};
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`
