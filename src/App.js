import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#13172f';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextConverter - Dark';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextConverter - Light';
    }
  };

  return (
    <>
      <Navbar
        title="Abhishek"
        about="About Me"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Welcome to Abhishek's Text Converter Website" mode={mode} />} />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;