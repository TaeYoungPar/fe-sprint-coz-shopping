import { styled } from "styled-components";
import Bookmark from "./Bookmark";
import { useState } from "react";
import Modal from "./Modal";

const ListContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 274px;
  padding: 0 20px;
  margin: 20px;
`;

const UrlImg = styled.img`
  width: 300px;
  height: 217px;
  margin-bottom: 12px;
  border-radius: 12px;
`;

const TextDiv = styled.div`
  font-weight: bold;
`;

const DiscountDiv = styled.div`
  color: #452cdd;
  font-weight: bolder;
`;

const PriceDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
`;

const FollowerDiv = styled.div``;

const TopTextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 24px;
`;

const BookMarkList = ({ items, setItems }) => {
  const [selectedImage, setSelectedImage] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const openModal = (el) => {
    setSelectedImage(true);
    setSelectedItem(el);
  };

  const closeModal = () => {
    setSelectedImage(false);
  };
  return (
    <ListContainer>
      {items.map((el) => (
        <ItemContainer key={el.id}>
          <UrlImg
            src={el.type === "Brand" ? el.brand_image_url : el.image_url}
            onClick={() => openModal(el)}
          />

          {selectedImage && (
            <Modal
              imageUrl={
                selectedItem.type === "Brand"
                  ? selectedItem.brand_image_url
                  : selectedItem.image_url
              }
              onClose={closeModal}
              itemId={selectedItem.id}
              setItems={setItems}
              isBookmarked={selectedItem.isBookmarked}
              selectedImage={selectedImage}
              selectedItem={selectedItem}
            />
          )}

          <Bookmark
            itemId={el.id}
            setItems={setItems}
            isBookmarked={el.isBookmarked}
          />
          <TopTextDiv>
            <TextDiv>
              {el.type === "Brand"
                ? el.brand_name
                : el.type === "Category"
                ? "#" + el.title
                : el.title}
            </TextDiv>

            {el.type === "Product" ? (
              <DiscountDiv>{el.discountPercentage + "%"}</DiscountDiv>
            ) : el.type === "Brand" ? (
              <TextDiv>관심고객수</TextDiv>
            ) : (
              ""
            )}
          </TopTextDiv>
          <TopTextDiv>
            <div>{el.type === "Exhibition" ? el.sub_title : ""}</div>

            {el.type === "Product" ? (
              <PriceDiv>{parseInt(el.price).toLocaleString() + "원"}</PriceDiv>
            ) : el.type === "Brand" ? (
              <FollowerDiv>{el.follower.toLocaleString()}</FollowerDiv>
            ) : (
              ""
            )}
          </TopTextDiv>
        </ItemContainer>
      ))}
    </ListContainer>
  );
};

export default BookMarkList;
