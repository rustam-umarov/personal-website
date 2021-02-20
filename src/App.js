import logo from "./assets/images/dribbble-gif.gif";
import fb from "./assets/images/fb.png";
import tr from "./assets/images/tr.png";
import gh from "./assets/images/gh.png";
import ig from "./assets/images/ig.png";
import li from "./assets/images/li.png";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div class='social'>
          <img
            src={li}
            class='social-icon'
            alt='logo'
            onClick={() =>
              window.open("https://www.linkedin.com/in/rustam-umarov", "_blank")
            }
          />
          <img
            src={gh}
            class='social-icon'
            alt='logo'
            onClick={() =>
              window.open("https://github.com/rustam-umarov", "_blank")
            }
          />
          <img
            src={tr}
            class='social-icon'
            alt='logo'
            onClick={() =>
              window.open("https://twitter.com/rustamumar0v", "_blank")
            }
          />
          <img
            src={ig}
            class='social-icon'
            alt='logo'
            onClick={() =>
              window.open("https://www.instagram.com/rstmumrv/", "_blank")
            }
          />
          <img
            src={fb}
            class='social-icon'
            alt='logo'
            onClick={() =>
              window.open("https://www.facebook.com/russstam/", "_blank")
            }
          />
        </div>
        <p class='under'>Under reactive construction...</p>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  );
}

export default App;
