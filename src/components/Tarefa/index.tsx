import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { alteraStatus, editar, remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { BotaoSalvar } from '../../styles'

import * as enums from '../../utils/enums/Tarefa'

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

  function handleTarefaConcluida({ target }: ChangeEvent<HTMLInputElement>) {
    const finalizado = target.checked
    dispatch(alteraStatus({ id, finalizado }))
  }

  useEffect(() => {
    if (descricaoOriginal.length > 0) setDescricao(descricaoOriginal)
  }, [descricaoOriginal])
  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={handleTarefaConcluida}
        />
        <S.Titulo>
          {isEditing && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
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
            <BotaoSalvar onClick={salvarTarefa}>Salvar</BotaoSalvar>
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
