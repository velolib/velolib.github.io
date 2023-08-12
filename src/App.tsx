import { Root } from "./pages";
import { IconContext } from "@phosphor-icons/react";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <IconContext.Provider
      value={{
        size: 32,
        weight: "duotone",
        mirrored: false,
        className: "w-8",
      }}
    >
      <HashRouter>
        <Root />
      </HashRouter>
    </IconContext.Provider>
  );
}

export default App;
