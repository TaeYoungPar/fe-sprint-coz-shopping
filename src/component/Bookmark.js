import styled from "styled-components";

const BookmarkIcon = styled.img`
  position: absolute;
  bottom: 65px;
  right: 25px;
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

// const ModalBookmarkIcon = styled(BookmarkIcon)`
//   transform: translate(-50%, -50%);
// `;

const Bookmark = ({ itemId, setItems, isBookmarked, selectedImage }) => {
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
