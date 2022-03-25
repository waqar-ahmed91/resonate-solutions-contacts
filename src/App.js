import FetchContacts from './Api'
import GlobalStyle from './components/GlobalStyles'
import { Header } from './components/Header'
function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <FetchContacts />
    </div>
  )
}

export default App
