import { Fragment } from 'react';
import {Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';

function App() { 
  return (
    <>
      {window.location.pathname === '/' ? <HomePage/> :(
      <>
        <NavBar/>
          <Container style={{marginTop:'7em'}}>
            <Outlet />
          </Container>
      </>
      )}
    </>
  );
}

export default observer(App);
