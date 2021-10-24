import { Route, Switch } from "react-router-dom";
import "./App.css";
import ZedHeader from "./components/commonComponent/ZedHeader";
import CheckScreen from "./screens/Check/CheckScreen";
import ListedScreen from "./screens/Listed/ListedScreen";
import SoldScreen from "./screens/Sold/SoldScreen";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <ZedHeader />
      <div style={{ maxWidth: "500px", margin: "auto" }}>
        <Switch>
          <Route path="/check">
            <CheckScreen />
          </Route>
          <Route path="/sold">
            <SoldScreen />
          </Route>
          <Route path="/listed">
            <ListedScreen />
          </Route>
          <Route path="/">
            <CheckScreen />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
