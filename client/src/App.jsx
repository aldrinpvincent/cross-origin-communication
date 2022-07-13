import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)



  useEffect(() => {

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    let addEditor = urlParams.get("moe-editor")

    if (addEditor) {
      var script = document.createElement('script');
      script.src = "https://firebasestorage.googleapis.com/v0/b/test-f41c4.appspot.com/o/moe-editor.js?alt=media&token=2c5ae89b-8712-476e-b93b-44fb98174f18";
      (document.head || document.documentElement).appendChild(script);
      // script.remove();

    }

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
