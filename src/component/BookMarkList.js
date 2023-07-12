import styled from "styled-components";
import Bookmark from "./Bookmark";

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 274px;
  padding: 0 12px;
  margin: 12px;
`;

const UrlImg = styled.img`
  width: 264px;
  height: 210px;
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

const BookMarkList = ({ items }) => {
  return (
    <ListContainer>
      {items.map((el) => (
        <ItemContainer key={el.id}>
          <UrlImg
            src={el.type === "Brand" ? el.brand_image_url : el.image_url}
          />

          <Bookmark itemId={el.id} />
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
