import { Campo, MainContainer, Titulo } from '../../styles'

const Formulario = () => {
  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <form>
        <Campo type="text" placeholder="Título" />
        <textarea placeholder="Descrição da Tarefa" />
        <Campo type="radio" name="prioridade" id="urgente" />
        <label htmlFor="urgente">Urgente</label>
        <Campo type="radio" name="prioridade" id="importante" />
        <label htmlFor="urgente">importante</label>
        <Campo type="radio" name="prioridade" id="normal" />
        <label htmlFor="normal">Urgente</label>
        <button type="submit">Cadastrar</button>
      </form>
    </MainContainer>
  )
}

export default Formulario
