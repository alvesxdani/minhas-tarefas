import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Botao } from '../components/Tarefa/styles'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  li {
    list-style: none;
  }
  height: 80vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666;
  border-color: #666;
  width: 100%;
  &[type='radio'] {
    width: fit-content;
    margin-right: 3px;
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
