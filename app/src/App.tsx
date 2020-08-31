import * as React from 'react';
import { useSelector } from 'react-redux';
import logo from './assets/icons/logo.svg';
import './assets/styles/App.scss';
import { RootState } from './reducers';

function App() {
  const githubLink = useSelector((state: RootState) => state.githubLink);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href={githubLink.data.toString()}
          target="_blank"
          rel="noopener noreferrer"
        >
          DiogoTheCoder
        </a>
      </header>
    </div>
  );
}

export default App;
