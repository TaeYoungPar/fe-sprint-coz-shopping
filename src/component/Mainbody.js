import axios from "axios";
import { useEffect, useState } from "react";
import Itemlist from "./Itemlist";
import "./mainbody.css";
import BookMarkList from "./BookMarkList";
import { styled } from "styled-components";

const Texth2 = styled.h2`
  width: 82%;
  height: 10px;
`;
const Ddd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //overflow: hidden;
  //이중div
`;

const Mainbody = ({ items, setItems }) => {
  //   const [items, setItems] = useState([]);
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
    <main className="mainbody-container">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Ddd>
            <Texth2>상품 리스트</Texth2>
            <Itemlist items={items.slice(0, 4)} setItems={setItems} />
            <Texth2>북마크 리스트</Texth2>
            <BookMarkList
              items={items.filter((item) => item.isBookmarked).slice(0, 4)}
              setItems={setItems}
            />
          </Ddd>
        </>
      )}
    </main>
  );
};

export default Mainbody;
