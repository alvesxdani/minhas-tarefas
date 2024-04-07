import { useSelector } from 'react-redux'
<<<<<<< HEAD
=======
import { MainContainer, Titulo } from '../../styles/index'
>>>>>>> 6fa6c306587e0a41f5cb734f7a2884fbba601e51
import Tarefa from '../../components/Tarefa'
import { RootReducer } from '../../store'
import { MainContainer, Titulo } from '../../styles'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criteria, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )
  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo === undefined) {
      return itens
    } else {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criteria === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criteria === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    }
  }
  const tarefas = filtraTarefas()
  const exibeResultado = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo?.length > 0 ? `e "${termo}"` : ''
    if (criteria === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como "${`${criteria} = ${valor}`}" ${complementacao}`
    }
    return mensagem
  }
  const mensagem = exibeResultado(tarefas.length)
  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefas.map((tarefas, index) => (
          <li key={index}>
            <Tarefa
              id={tarefas.id}
              titulo={tarefas.titulo}
              descricao={tarefas.descricao}
              prioridade={tarefas.prioridade}
              status={tarefas.status}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
