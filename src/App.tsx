import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Container, GlobalStyle } from './styles'
import store from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

function App() {
  const rotas = createBrowserRouter([
    {
      path: '/minhas-tarefas/',
      element: <Home />
    },
    {
      path: '/minhas-tarefas/novo',
      element: <Cadastro />
    }
  ])
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
