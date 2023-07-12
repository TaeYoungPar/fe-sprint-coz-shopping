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

const Bookmark = ({ itemId }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <BookmarkIcon
      src={isBookmarked ? "Property 1=on.png" : "Property 1=off.png"}
      alt="Bookmark Icon"
      onClick={toggleBookmark}
      itemId={itemId}
    />
  );
};

export default Bookmark;
