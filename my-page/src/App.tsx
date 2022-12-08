import "./App.css";
import Bio from "./components/Bio";
import Contacts from "./components/Contacts";
import WelcomeHeader from "./components/WelcomeHeader";
const data = require("./data/me.json");

const App = () => (
  <div className="App">
    <WelcomeHeader name={data.name} />
    <Bio bio={data.bio} />
    <Contacts contacts={data.contacts} />
  </div>
);

export default App;
