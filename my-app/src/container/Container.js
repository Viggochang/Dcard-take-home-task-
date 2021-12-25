import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Article from "./Article";

const ContainerDiv = styled.div`
  width: 75vw;
  margin: 0 auto;
  padding: 0 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
`;

const LoadMore = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: gray;
`;

export default function Container() {
  const [data, setData] = useState([]);

  return (
    <ContainerDiv>
      {data.map((data) => (
        <Article key={data.id} title={data.title} excerpt={data.excerpt} />
      ))}
      <LoadMore />
    </ContainerDiv>
  );
}
