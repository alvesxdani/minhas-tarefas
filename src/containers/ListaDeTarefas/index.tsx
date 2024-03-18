import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../utils/enums/Tarefa'

const ListaDeTarefas = () => {
  const tarefas = [
    {
      titulo: 'Estudar typescript',
      descricao: 'Ver a aula 3 na EBAC',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA
    },
    {
      titulo: 'Estudar typescript',
      descricao: 'Ver a aula 4 na EBAC',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE
    },
    {
      titulo: 'Estudar typescript',
      descricao: 'Ver a aula 5 na EBAC',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA
    }
  ]
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
