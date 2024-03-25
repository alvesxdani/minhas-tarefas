const Cadastro = () => {
  return (
    <form>
      <input type="text" placeholder="Título" />
      <textarea placeholder="Descrição da Tarefa" />
      <input type="radio" name="prioridade" id="urgente" />
      <label htmlFor="urgente">Urgente</label>
      <input type="radio" id="importante" />
      <label htmlFor="urgente">importante</label>
      <input type="radio" id="normal" />
      <label htmlFor="normal">Urgente</label>
      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default Cadastro
