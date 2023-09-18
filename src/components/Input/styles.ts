import styled from "styled-components"

export const Input = styled.input`
  width: 438px;
  border-radius: 25px;
  height: 59px;
  padding: 15px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  border: none;
  box-sizing: border-box;
  &:focus {
    border: none;
  }
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`
