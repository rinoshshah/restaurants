import Header from "./components/Header";
import Home from "./components/Home";
import RestaurantDetails from "./components/RestaurantDetails"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="py-3">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/restaurant/:name/:id" element={<RestaurantDetails/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
