// import BookMarkList from "../component/BookMarkList";

// import { useState } from "react";
// import { styled } from "styled-components";

// const Flex = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const CategoryDiv = styled.div`
//   display: flex;
//   text-align: center;
//   margin-top: 24px;
// `;

// const Image = styled.img`
//   margin: 2px 20px;
// `;

// const TextDiv = styled.div`
//   margin: 2px 0;
// `;

// const BookmarkDiv = styled.div`
//   width: 81.2%;
// `;
// const Bookma = ({ items, setItems }) => {
//   const onClickHandler = (type) => {
//     const filtered = items.filter((el) => el.type === type);
//     setItems(filtered);
//   };
//   return (
//     <Flex>
//       <CategoryDiv>
//         <div>
//           <Image src="/Image/all.png" />
//           <TextDiv>전체</TextDiv>
//         </div>
//         <div>
//           <Image
//             src="/Image/prod.png"
//             onClick={() => onClickHandler("Product")}
//           />
//           <TextDiv>상품</TextDiv>
//         </div>
//         <div>
//           <Image
//             src="/Image/cate.png"
//             onClick={() => onClickHandler("Category")}
//           />
//           <TextDiv>카테고리</TextDiv>
//         </div>
//         <div>
//           <Image
//             src="/Image/exhib.png"
//             onClick={() => onClickHandler("Exhibition")}
//           />
//           <TextDiv>기획전</TextDiv>
//         </div>
//         <div>
//           <Image
//             src="/Image/brand.png"
//             onClick={() => onClickHandler("Brand")}
//           />
//           <TextDiv>브랜드</TextDiv>
//         </div>
//       </CategoryDiv>
//       <BookmarkDiv>
//         <BookMarkList
//           items={items.filter((item) => item.isBookmarked).slice(0, 4)}
//           setItems={setItems}
//         />
//       </BookmarkDiv>
//     </Flex>
//   );

//   //   <BookMarkList items={items} setItems={setItems} />;
// };

// export default Bookma;
