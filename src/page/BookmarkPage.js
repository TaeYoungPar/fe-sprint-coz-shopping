import BookMarkList from "../component/BookMarkList";
import { styled } from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  return (
    <Flex>
      <CategoryDiv>
        <div>
          <Image src="/Image/all.png" />
          <TextDiv>전체</TextDiv>
        </div>
        <div>
          <Image src="/Image/prod.png" />
          <TextDiv>상품</TextDiv>
        </div>
        <div>
          <Image src="/Image/cate.png" />
          <TextDiv>카테고리</TextDiv>
        </div>
        <div>
          <Image src="/Image/exhib.png" />
          <TextDiv>기획전</TextDiv>
        </div>
        <div>
          <Image src="/Image/brand.png" />
          <TextDiv>브랜드</TextDiv>
        </div>
      </CategoryDiv>
      <BookmarkDiv>
        <BookMarkList
          items={items.filter((item) => item.isBookmarked).slice(0, 4)}
          setItems={setItems}
        />
      </BookmarkDiv>
    </Flex>
  );
};

export default BookmarkPage;
