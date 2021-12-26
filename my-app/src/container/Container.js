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

const buffer = 200;
export default function Container() {
  const [data, setData] = useState([]);
  const lastId = useRef("");

  console.log("render");

  function infiniteScroll(data, handleInfiniteScroll) {
    const bottomToWindowTop = document.body.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (bottomToWindowTop - windowHeight < buffer) {
      window.removeEventListener("scroll", handleInfiniteScroll);
      lastId.current = data.slice(-1)[0]["id"];
      fetchData();
    }
  }

  function fetchData() {
    fetch(`http://localhost:5000/list?id=${lastId.current}`)
      .then((res) => res.json())
      .then((newData) => {
        setData((state) => [...state, ...newData]);

        function handleInfiniteScroll() {
          infiniteScroll(newData, handleInfiniteScroll);
        }
        window.addEventListener("scroll", handleInfiniteScroll);
      })
      .catch((err) => console.log("err"));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContainerDiv>
      {data.map((data) => (
        <Article key={data.id} title={data.title} excerpt={data.excerpt} />
      ))}
    </ContainerDiv>
  );
}
