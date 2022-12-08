import "./App.css";
const data = require("./data/me.json");

type FooterProps = {
  copyright: string;
};

const Footer: React.FC<FooterProps> = (props) => (
  <footer>Footer {props.copyright}</footer>
);

const App = () => (
  <div className="App">
    <h1>Hello, I am {data.name}</h1>
    <h3>{data.bio}</h3>
    <h4>Here are my contacts</h4>
    <ul>
      {data.contacts.map((element: any) => {
        return (
          <li>
            <a href={element.link}>{element.name}</a>
          </li>
        );
      })}
    </ul>
    <Footer copyright={"c"} />
  </div>
);

export default App;
