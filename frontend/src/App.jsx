import "./App.css";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Feed from "@components/feed/feed";

function App() {
  return (
    <BrowserRouter>

    <nav className="App">
      <Navbar/>
    </nav>
    <div className="bodyContainer">
      <Routes>
        <Route exact path="/" element={<Feed />}>

        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
