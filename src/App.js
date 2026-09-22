import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textutils from './components/Textutils';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const [myStyle, setMyStyel] = useState({
    color: "black",
    backgroundColor: "white"
  })
  const [myText, setMyText] = useState({
    color: "black",
    backgroundColor: "white"
  })

  const [glowButton, setglowButton] = useState({
    id: "btn",
    color: "#343a40"
  });

  const [show, setShow] = useState(false)

  const handleButtonClick = (buttonId, color) => {
    setglowButton({
      id: buttonId,
      color: color
    });
    setMyStyel({
      color: "white",
      backgroundColor: color
    })
    setMyText({
      color: 'white',
      backgroundColor: color
    })
  };

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const DarkMode = () => {
    if (mode == "dark") {
      setMode("light")
      setMyStyel({
        color: 'black',
        backgroundColor: 'white'
      })
      setMyText({
        color: 'black',
        backgroundColor: 'white'
      })
      showAlert('Light mode has enabled', 'success');
      setglowButton({
        id: "btn",
        color: "#343a40"
      });
      setShow(!show);
    }
    else {
      setMode("dark")
      setMyStyel({
        color: 'white',
        backgroundColor: glowButton.color
      })
      setMyText({
        color: 'white',
        backgroundColor: glowButton.color
      })
      showAlert('Dark mode has enabled', 'success');
      handleButtonClick(glowButton.id, glowButton.color)
      setShow(!show);
    }
  }

  return (
    <>
        <Navbar title="Textutils" mode={mode} toggleMode={DarkMode} glow={glowButton} handle={handleButtonClick} show={show} />
        <Alert alert={alert}/>
        <Textutils Text={myText} showAlert={showAlert} />
    </>
  );
}

export default App;
