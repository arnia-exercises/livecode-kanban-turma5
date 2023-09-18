import styled from "styled-components"

export const Button = styled.button<{ variant: "MAIN" | "SECONDARY" }>`
  width: 209px;
  height: 59px;
  border-radius: 25px;
  color: ${({ theme, variant }) =>
    variant === "MAIN" ? theme.colors.white : theme.colors.lightBlue};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, variant }) =>
    variant === "MAIN" ? theme.colors.darkBlue : theme.colors.white};
  border-color: ${({ theme, variant }) =>
    variant === "MAIN" ? "none" : theme.colors.darkBlue};
  cursor: pointer;

  &:disabled {
    background-color: gray;
  }
`
