import { GlobalStyle } from "./Globalstyle";
import { GlobalContext } from "./contexts/GlobalContext";
import GlobalState from "./contexts/GlobalState";
import Router from "./routes/Router";

export default function App() {
  const context = GlobalState();
  
  return (
    <GlobalContext.Provider value={context}>
      <GlobalStyle />
      <Router />
    </GlobalContext.Provider>
  );
}

