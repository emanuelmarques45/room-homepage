import { GlobalStyle } from './assets/GlobalStyle'
import { Header, Footer } from './components'
import { Home } from './pages'

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </div>
  )
}
