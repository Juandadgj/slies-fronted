import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import App from './App';
import { client } from './core/config/apollo/apollo';
import { theme } from './core/theme/theme';
import { store } from './redux/store/store';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'));
