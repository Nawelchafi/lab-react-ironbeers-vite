import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import HomePage from "./pages/HomePage"
import AllBreersPage from "./pages/AllBeersPage"
import AddBreerPage from "./pages/AddBeerPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import RandomBreersPage from "./pages/RandomBeerPage"
import AddBeerPage from "./pages/AddBeerPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element=<HomePage /> ></Route>
        <Route path="/beers" element=<AllBreersPage /> ></Route>
        <Route path="/random-beer" element=<RandomBreersPage /> ></Route>
        <Route path="/new-beer" element=<AddBeerPage /> ></Route>
        <Route path="/beers/:beerId" element=<BeerDetailsPage /> ></Route>
      </Routes>
    </div>
  );
}

export default App;
