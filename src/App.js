import "./App.css";
import Landing from "./components/Landing";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <Landing />
    </AppProvider>
  );
}

export default App;
