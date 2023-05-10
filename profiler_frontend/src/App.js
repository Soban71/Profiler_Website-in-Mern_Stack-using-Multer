import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import {Routes , Route} from "react-router-dom";
import './index.css'


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
