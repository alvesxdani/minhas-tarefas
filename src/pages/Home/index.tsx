import BotãoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltros={true} />
      <ListaDeTarefas />
      <BotãoAdicionar />
    </>
  )
}

export default Home
