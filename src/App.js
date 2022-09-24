// import logo from './logo.svg';

import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
function App() {
  return (
    <div className="head">
      <div className="container" my-3>
        {/* <img src="./background.webp" /> */}
        <TextForm Heading="Enter the text to Convert(By RABIN)" />
      </div>
    </div>
  );
}

export default App;
