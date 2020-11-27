import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ModalLogin from './Components/login/modal-login';
import Dashboard from './Components/dashboard/DashboardFullView'

function App() {
  return (
      <Router>

        <Route exact path='/login' component={ModalLogin}/>
        <Route exact path='/dashboard' component={Dashboard}/>

      </Router>
   
  );
}

export default App;
