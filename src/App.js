import "./App.css";
import Landing from "./components/Landing";
import { AppProvider } from "./context/AppContext";
import { Theme } from "./context/ThemeContext";

function App() {
  return (
    <div className='App'>
      <AppProvider>
        <Theme>
          <Landing />
        </Theme>
      </AppProvider>
    </div>
  );
}

export default App;
