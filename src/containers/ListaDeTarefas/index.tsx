import { useSelector } from 'react-redux'
import { Container } from './styles'
import Tarefa from '../../components/Tarefa'
import * as enums from '../../utils/enums/Tarefa'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>2 tarefas marcadas como &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
      <ul>
        {tarefas.map((tarefas, index) => (
          <li key={index}>
            <Tarefa
              titulo={tarefas.titulo}
              descricao={tarefas.descricao}
              prioridade={tarefas.prioridade}
              status={tarefas.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
