import styled from "styled-components";

const BookmarkIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ModalBookmarkIcon = styled.img`
  position: absolute;
  transform: translate(-350px, 195px);
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Bookmark = ({ itemId, isBookmarked, selectedImage, onBookmarkClick }) => {
  const handleClick = () => {
    onBookmarkClick(itemId); // 북마크 클릭 이벤트 핸들러 호출
  };

  return selectedImage ? (
    <ModalBookmarkIcon
      src={isBookmarked ? "/Image/Property-on.png" : "/Image/Property-off.png"}
      alt="Bookmark Icon"
      onClick={handleClick}
    />
  ) : (
    <BookmarkIcon
      src={isBookmarked ? "/Image/Property-on.png" : "/Image/Property-off.png"}
      alt="Bookmark Icon"
      onClick={handleClick}
    />
  );
};

export default Bookmark;
