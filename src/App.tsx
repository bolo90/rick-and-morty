import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import Modal from './components/Modal';
import { GlobalStyles, darkTheme } from './theme/global';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Characters from './pages/characters/Characters';
import Episodes from './pages/episodes/Episodes';
import { useState } from 'react';
import { device } from './theme/breakpoints';

function App() {

  const [show, setShow] = useState(() => window.innerWidth < Number(device.md) ? true : false);

  const toggleMenu = () => {
    setShow(s => !s);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Router>
        <Sidebar show={show} setShow={toggleMenu} />
        <Navbar setShow={toggleMenu} />
        <Switch>
          <Route exact path="/"><Redirect to="/characters" /></Route>
          <Route path="/characters" component={() => <Characters />} />
          <Route path="/episodes" component={() => <Episodes />} />
        </Switch>
      </Router>
      <Modal />
    </ThemeProvider>
  );
}

export default App;
