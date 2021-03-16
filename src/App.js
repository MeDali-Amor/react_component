import './App.css';
import ProfilPhoto from "./component/profile/ProfilPhoto";
import FullName from "./component/profile/FullName";
import Address from "./component/profile/Address";

function App() {
  return (
    <div className="App">
      <div className="container">
      <ProfilPhoto />
      <div className="text">
      <FullName />
      <Address />
      </div>
      </div>
    </div>

  );
}

export default App;
