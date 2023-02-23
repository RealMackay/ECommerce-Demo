import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
