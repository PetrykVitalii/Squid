import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import Main from '@/containers/Main';

const GlobalStyle = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Gemunu Libre';
  }

  html,
  body,
  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }

  #root {
    background-color: white;
    overflow: auto;
    position: relative;
    z-index: 1;

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
  }
`;

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default App;
