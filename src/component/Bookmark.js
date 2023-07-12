import { useState } from "react";
import styled from "styled-components";

const BookmarkIcon = styled.img`
  position: absolute;
  bottom: 70px;
  right: 15px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Bookmark = ({ itemId, setItems, isBookmarked }) => {
  const handleClick = () => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, isBookmarked: !isBookmarked };
        }
        return item;
      })
    );
  };

  return (
    <BookmarkIcon
      src={isBookmarked ? "Property 1=on.png" : "Property 1=off.png"}
      alt="Bookmark Icon"
      onClick={handleClick}
    />
  );
};

export default Bookmark;
