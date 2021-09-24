import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextInput from "./components/TextInput";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.color="white";
      document.body.style.backgroundColor="#042743";
    } else {
      setMode("light");
      document.body.style.color="black";
      document.body.style.backgroundColor="white";
    }
  };
  return (
    <>
    <Router>
      <div>
        <Navbar
          title="TextUtils"
          mode={mode}
          handleMode={handleMode}
          home="Home"
          about="About"
        />
      </div>
      <div className="container">
      <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
          <TextInput mode={mode} />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
