import axios from "axios";
import { useEffect, useState } from "react";
import Itemlist from "./Itemlist";
import "./mainbody.css";
import BookMarkList from "./BookMarkList";
import { styled } from "styled-components";

const Texth2 = styled.h2`
  width: 90%;
  height: 10px;
`;
const Ddd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  //overflow: hidden;
  //이중div
`;

const Mainbody = ({ items, setItems, isLoading }) => {
  const handleBookmarkClick = (itemId) => {
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
          <Ddd>
            <Texth2>상품 리스트</Texth2>
            <Itemlist
              items={items.slice(0, 4)}
              setItems={setItems}
              onBookmarkClick={handleBookmarkClick}
            />
            <Texth2>북마크 리스트</Texth2>
            <BookMarkList
              items={items.filter((item) => item.isBookmarked).slice(0, 4)}
              setItems={setItems}
              onBookmarkClick={handleBookmarkClick}
            />
          </Ddd>
        </>
      )}
    </main>
  );
};

export default Mainbody;
