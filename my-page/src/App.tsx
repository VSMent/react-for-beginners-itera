import "./App.css";
import WelcomeHeader from "./components/WelcomeHeader";
import Bio from "./components/Bio";
import Contacts from "./components/Contacts";
import AppLink from "./components/AppLink";
const data = require("./data/me.json");

const App = () => (
  <div className="App">
    <WelcomeHeader name={data.name} />
    <Bio bio={data.bio} />
    <Contacts contacts={data.contacts} />
    <footer>
      <AppLink
        customText="Random text"
        customUrl="https://www.google.com"
        callback={() => {
          console.log("appLink callback");
        }}
      />
    </footer>
  </div>
);

export default App;
