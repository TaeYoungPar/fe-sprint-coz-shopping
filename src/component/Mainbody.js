import axios from "axios";
import { useEffect, useState } from "react";
import Itemlist from "./Itemlist";
import "./mainbody.css";
import BookMarkList from "./BookMarkList";

const Mainbody = () => {
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

  const toggleBookmark = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, isBookmarked: !item.isBookmarked };
        }
        return item;
      })
    );
  };

  return (
    <main className="mainbody-container">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2>상품 리스트</h2>
          <Itemlist items={items.slice(0, 4)} toggleBookmark={toggleBookmark} />
          <h2>북마크 리스트</h2>
          <BookMarkList
            items={items.filter((item) => item.isBookmarked).slice(0, 4)}
          />
        </>
      )}
    </main>
  );
};

export default Mainbody;
