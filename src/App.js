import "./App.css";
import Landing from "./components/Landing";
import { AppProvider } from "./context/AppContext";
import { Theme } from "./context/ThemeContext";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className='App'>
      <AppProvider>
        <Theme>
          <Landing />
          <ScrollToTop smooth />
        </Theme>
      </AppProvider>
    </div>
  );
}

export default App;
