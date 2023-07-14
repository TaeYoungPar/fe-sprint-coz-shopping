import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Mainbody from "./component/Mainbody";
import BookmarkPage from "./page/BookmarkPage";
import ItemlistPage from "./page/ItemlistPage";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Mainbody items={items} setItems={setItems} />}
          />
          <Route
            path="/products/list"
            element={<ItemlistPage items={items} setItems={setItems} />}
          />
          <Route
            path="/bookmark"
            element={<BookmarkPage items={items} setItems={setItems} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
