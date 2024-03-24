import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { editar, remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [descricao, setDescricao] = useState('')

  function cancelaEdit() {
    setDescricao(descricaoOriginal)
    setIsEditing(false)
  }

  function salvarTarefa() {
    dispatch(
      editar({
        id,
        titulo,
        prioridade,
        status,
        descricao
      })
    )
    setIsEditing(false)
  }

  useEffect(() => {
    if (descricaoOriginal.length > 0) setDescricao(descricaoOriginal)
  }, [descricaoOriginal])
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        value={descricao}
        onChange={({ target }) => setDescricao(target.value)}
        disabled={!isEditing}
      ></S.Descricao>
      <S.BarraAcoes>
        {isEditing ? (
          <>
            <S.BotaoSalvar onClick={salvarTarefa}>Salvar</S.BotaoSalvar>
            <S.Botao onClick={cancelaEdit}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setIsEditing(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
