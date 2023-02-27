import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Index from './pages/index';
import About from './pages/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './layouts/header';
import Departments from './pages/departments';
import Services from './pages/services';
import Contact from './pages/contact';
function App() {
  return [
    
    <Router>
    
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/about" component={About}/>
        <Route path="/departments" component={Departments}/>
        <Route path="/services" component={Services}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </Router>
  ];
}

export default App;
