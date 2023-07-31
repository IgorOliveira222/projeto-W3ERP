import { Routes, Route} from 'react-router-dom'
import Dashboard from "./pages/Dashboard"
import DashboardInitial from "./pages/DashboaardInitial"
import Login from "./pages/Login"
import Predicoes from "./pages/Predicoes"
import PredicoesClient from "./pages/PredicoesClient"
import Products from "./pages/Products"

function App() {

  return (
    <>
          <Login/>
      <Routes>
        <Route path="DashboardInitial" element= {<DashboardInitial/>} />
        <Route path="/Dashboard" element= {<Dashboard/>} />
        <Route path="Predicoes" element= {<Predicoes/>} />
        <Route path="/Dashboard/Predicoes/:id" element= {<PredicoesClient/>} />
        <Route path="Produtos" element= {<Products/>} />
      </Routes>
    </>
  )
}

export default App
