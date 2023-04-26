import './App.css';
import Sidenav from './components/global/Sidenav';
import Topbar from './components/global/Topbar';
import Dashboard from './scenes/Dashboard';
import API from './scenes/Api';
import Favourites from './scenes/Favourites';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
        <Topbar />
      <div className='app-container'>
        <Sidenav />
        <div className='content-page'>
          <Routes>
            <Route path='/' element = {<Dashboard/>} />
            <Route path='/API' element = {<API/>} />
            <Route path='/Favourites' element = {<Favourites/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
