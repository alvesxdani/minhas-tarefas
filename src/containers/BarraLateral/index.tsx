import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { setTermo } from '../../store/reducers/filtro'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={({ target }) => dispatch(setTermo(target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Status.PENDENTE}
            criteria="status"
            legenda="pendentes"
          />
          <FiltroCard
            valor={enums.Status.CONCLUIDA}
            criteria="status"
            legenda="concluídas"
          />
          <FiltroCard
            valor={enums.Prioridade.URGENTE}
            criteria="prioridade"
            legenda="urgentes"
          />
          <FiltroCard
            valor={enums.Prioridade.IMPORTANTE}
            criteria="prioridade"
            legenda="importantes"
          />
          <FiltroCard
            valor={enums.Prioridade.NORMAL}
            criteria="prioridade"
            legenda="normal"
          />
          <FiltroCard criteria="todas" legenda="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}
export default BarraLateral
