<<<<<<< HEAD
import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import { Form, Opcao, Opcoes } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    setTitulo('')
    setDescricao('')
    setPrioridade(enums.Prioridade.NORMAL)
    navigate('/')
  }

  function handleTitulo({ target }: ChangeEvent<HTMLInputElement>) {
    setTitulo(target.value)
  }

  function handleDescricao({ target }: ChangeEvent<HTMLTextAreaElement>) {
    setDescricao(target.value)
  }

  function handlePrioridade({ target }: ChangeEvent<HTMLInputElement>) {
    setPrioridade(target.value as enums.Prioridade)
  }

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={handleTitulo}
        />
        <Campo
          as="textarea"
          placeholder="Descrição da Tarefa"
          value={descricao}
          onChange={handleDescricao}
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => {
            return (
              <Opcao key={prioridade}>
                <Campo
                  value={prioridade}
                  name="prioridade"
                  type="radio"
                  id={prioridade}
                  onChange={handlePrioridade}
                  defaultChecked={prioridade === enums.Prioridade.NORMAL}
                />
                <label htmlFor={prioridade}>{prioridade}</label>
              </Opcao>
            )
          })}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
=======
import { Campo, MainContainer, Titulo } from '../../styles'

const Formulario = () => {
  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <form>
        <Campo type="text" placeholder="Título" />
        <textarea placeholder="Descrição da Tarefa" />
        <Campo type="radio" name="prioridade" id="urgente" />{' '}
        <label htmlFor="urgente">Urgente</label>
        <Campo type="radio" name="prioridade" id="importante" />
        <label htmlFor="urgente">importante</label>
        <Campo type="radio" name="prioridade" id="normal" />{' '}
        <label htmlFor="normal">Normal</label>
        <button type="submit">Cadastrar</button>
      </form>
>>>>>>> 6fa6c306587e0a41f5cb734f7a2884fbba601e51
    </MainContainer>
  )
}

export default Formulario
