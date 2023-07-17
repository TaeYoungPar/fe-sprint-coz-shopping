import axios from "axios";
import { useEffect, useState } from "react";
import Itemlist from "./Itemlist";
import "./mainbody.css";
import BookMarkList from "./BookMarkList";
import { styled } from "styled-components";
import { toast } from "react-toastify";
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
          const isBookmarked = !item.isBookmarked;
          if (isBookmarked) {
            toast.success("북마크가 추가되었습니다."); // 북마크 추가 시 Toast 메시지
          } else {
            toast.error("북마크가 제거되었습니다."); // 북마크 제거 시 Toast 메시지
          }
          return { ...item, isBookmarked };
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
