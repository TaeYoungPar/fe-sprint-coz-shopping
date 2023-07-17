import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Mainbody from "./component/Mainbody";
import BookmarkPage from "./page/BookmarkPage";
import ItemlistPage from "./page/ItemlistPage";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css";

const Container = styled(ToastContainer)`
  .Toastify__toast {
    border-radius: 20px;
    font-weight: bold;
    color: black;
    width: 270px;
  }

  .Toastify__toast-icon {
    width: 32px;
    height: 32px;
  }

  .Toastify__toast-icon > svg {
    width: 20px;
    height: 20px;
    fill: none;
  }

  .Toastify__toast--success {
    .Toastify__toast-icon {
      background-image: url("/Image/Property-on.png");
    }
  }

  .Toastify__toast--error {
    .Toastify__toast-icon {
      background-image: url("/Image/Property-off.png");
    }
  }
  .Toastify__close-button {
    display: none;
  }
`;

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
      <Container
        position="bottom-right"
        hideProgressBar={true}
        autoClose={1000}
      />
    </div>
  );
}

export default App;
