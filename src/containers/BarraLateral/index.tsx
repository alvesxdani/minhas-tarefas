import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { setTermo } from '../../store/reducers/filtro'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { Campo } from '../../styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const navigate = useNavigate()

  function voltarParaHome() {
    navigate('/minhas-tarefas/')
  }
  return (
    <S.Aside>
      {mostrarFiltros ? (
        <div>
          <Campo
            type="text"
            placeholder="Buscar"
            value={termo}
            onChange={({ target }) => dispatch(setTermo(target.value))}
          />
          <S.Filtros>
            <FiltroCard
              valorCard={enums.Status.PENDENTE}
              criteriaCard="status"
              legenda="pendentes"
            />
            <FiltroCard
              valorCard={enums.Status.CONCLUIDA}
              criteriaCard="status"
              legenda="concluídas"
            />
            <FiltroCard
              valorCard={enums.Prioridade.URGENTE}
              criteriaCard="prioridade"
              legenda="urgentes"
            />
            <FiltroCard
              valorCard={enums.Prioridade.IMPORTANTE}
              criteriaCard="prioridade"
              legenda="importantes"
            />
            <FiltroCard
              valorCard={enums.Prioridade.NORMAL}
              criteriaCard="prioridade"
              legenda="normal"
            />
            <FiltroCard criteriaCard="todas" legenda="todas" />
          </S.Filtros>
        </div>
      ) : (
        <S.ButtonAside onClick={voltarParaHome}>Voltar ao início</S.ButtonAside>
      )}
    </S.Aside>
  )
}
export default BarraLateral
