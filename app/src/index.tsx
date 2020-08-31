import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './stores/store';
import './assets/styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { getGithubLinkValue } from './actions/githubLinkAction';

if (typeof window !== 'undefined') {
  store.dispatch(getGithubLinkValue());

  render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById('root'),
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
