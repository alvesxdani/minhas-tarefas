import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${({ ativo }) => (ativo ? variaveis.azul : '#a1a1a1')};
  color: ${({ ativo }) => (ativo ? variaveis.azul : '#5e5e5e')};
  background-color: ${({ ativo }) => (ativo ? variaveis.branco : '#fcfcfc')};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.div`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.div`
  font-size: 14px;
`
