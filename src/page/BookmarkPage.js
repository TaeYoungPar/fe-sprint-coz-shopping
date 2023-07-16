import { useState } from "react";
import BookMarkList from "../component/BookMarkList";
import { styled } from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
`;

const CategoryDiv = styled.div`
  display: flex;
  text-align: center;
  margin-top: 24px;
`;

const Image = styled.img`
  margin: 2px 20px;
`;

const TextDiv = styled.div`
  margin: 2px 0;
`;

const BookmarkDiv = styled.div`
  width: 81.2%;
`;

const BookmarkPage = ({ items, setItems }) => {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredItems =
    selectedCategory === "전체"
      ? items
      : items.filter((el) => el.type === selectedCategory);

  const onClickHandler = (type) => {
    setSelectedCategory(type);
  };

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
    <Flex>
      <CategoryDiv>
        <div>
          <Image src="/Image/all.png" onClick={() => onClickHandler("전체")} />
          <TextDiv>전체</TextDiv>
        </div>
        <div>
          <Image
            src="/Image/prod.png"
            onClick={() => onClickHandler("Product")}
          />
          <TextDiv>상품</TextDiv>
        </div>
        <div>
          <Image
            src="/Image/cate.png"
            onClick={() => onClickHandler("Category")}
          />
          <TextDiv>카테고리</TextDiv>
        </div>
        <div>
          <Image
            src="/Image/exhib.png"
            onClick={() => onClickHandler("Exhibition")}
          />
          <TextDiv>기획전</TextDiv>
        </div>
        <div>
          <Image
            src="/Image/brand.png"
            onClick={() => onClickHandler("Brand")}
          />
          <TextDiv>브랜드</TextDiv>
        </div>
      </CategoryDiv>
      <BookmarkDiv>
        <BookMarkList
          items={filteredItems.filter((item) => item.isBookmarked).slice(0, 4)}
          setItems={setItems}
          onBookmarkClick={handleBookmarkClick}
        />
      </BookmarkDiv>
    </Flex>
  );

  //   <BookMarkList items={items} setItems={setItems} />;
};

export default BookmarkPage;
