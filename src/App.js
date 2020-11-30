import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ModalLogin from './Components/login/modal-login';
import Dashboard from './Components/dashboard/DashboardFullView'
import Boxes from './Components/dashboard/Resultados/Resultados'

function App() {
  return (
      <Router>

        <Route exact path='/login' component={ModalLogin}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/Boxes' component={Boxes}/>

      </Router>
   
  );
}

export default App;
