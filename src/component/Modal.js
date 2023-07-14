import styled from "styled-components";
import Bookmark from "./Bookmark";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

const ModalContent = styled.img`
  width: 744px;
  height: 480px;
  margin-bottom: 12px;
  border-radius: 12px;
`;

const BookmarkWithText = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;

const TextDiv = styled.div`
  position: absolute;
  transform: translate(-315px, 190px);
  width: 664px;
  height: 30px;
  font-size: 24px;
  color: white;
  font-weight: bold;
`;

const Modal = ({
  imageUrl,
  onClose,
  isBookmarked,
  setItems,
  itemId,
  selectedImage,
  selectedItem,
}) => {
  return (
    <ModalContainer onClick={onClose}>
      <ModalContent src={imageUrl} alt="Modal Image" />
      <BookmarkWithText>
        <Bookmark
          itemId={itemId}
          setItems={setItems}
          isBookmarked={isBookmarked}
          selectedImage={selectedImage}
        />
        <TextDiv>
          {selectedItem.type === "Brand"
            ? selectedItem.brand_name
            : selectedItem.type === "Category"
            ? "#" + selectedItem.title
            : selectedItem.title}
        </TextDiv>
      </BookmarkWithText>
    </ModalContainer>
  );
};

export default Modal;
