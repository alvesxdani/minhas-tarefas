import { useDispatch, useSelector } from 'react-redux'
import { setCriteria } from '../../store/reducers/filtro'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criteriaCard: 'prioridade' | 'status' | 'todas'
  valorCard?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criteriaCard, valorCard }: Props) => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { criteria, valor } = useSelector((state: RootReducer) => state.filtro)

  const contarTarefas = () => {
    if (criteriaCard === 'todas') return itens.length
    if (criteriaCard === 'prioridade')
      return itens.filter((item) => item.prioridade === valorCard).length
    if (criteriaCard === 'status')
      return itens.filter((item) => item.status === valorCard).length
  }

  const filtrar = () =>
    dispatch(
      setCriteria({
        criteria: criteriaCard,
        valor: valorCard
      })
    )

  const verificaAtivo = () => {
    const mesmoCriterio = criteria === criteriaCard
    const mesmoValor = valor === valorCard
    return mesmoCriterio && mesmoValor
  }

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
