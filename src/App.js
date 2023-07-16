import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Mainbody from "./component/Mainbody";
import BookmarkPage from "./page/BookmarkPage";
import ItemlistPage from "./page/ItemlistPage";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    try {
      const response = await axios.get(
        "http://cozshopping.codestates-seb.link/api/v1/products"
      );
      const itemsWithBookmark = response.data.map((item) => ({
        ...item,
        isBookmarked: false,
      }));
      setItems(itemsWithBookmark);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Mainbody
                items={items}
                setItems={setItems}
                isLoading={isLoading}
              />
            }
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
