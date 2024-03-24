import { useDispatch, useSelector } from 'react-redux'
import { setCriteria } from '../../store/reducers/filtro'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criteria: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criteria, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)
  const contarTarefas = () => {
    if (criteria === 'todas') return tarefas.itens.length
    if (criteria === 'prioridade')
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    if (criteria === 'status')
      return tarefas.itens.filter((item) => item.status === valor).length
  }
  const verificaAtivo = () => {
    const mesmoCriterio = filtro.criteria === criteria
    const mesmoValor = filtro.valor === valor
    return mesmoCriterio && mesmoValor
  }
  const filtrar = () =>
    dispatch(
      setCriteria({
        criteria,
        valor
      })
    )
  const ativo = verificaAtivo()
  const contador = contarTarefas()
  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
