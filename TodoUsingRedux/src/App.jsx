import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'

function App() {

  return (
    <Provider store={store}>
      <h2 className='bg-orange-400 text-4xl pl-60'>Add Your Todos</h2>
      <AddTodo />
      <Todos />
    </Provider>
  )
}

export default App
