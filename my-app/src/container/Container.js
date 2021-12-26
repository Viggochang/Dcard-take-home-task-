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

const apiHost = "http://localhost:5000";
const buffer = 200;
export default function Container() {
  const [data, setData] = useState([]);
  const lastId = useRef("");

  function infiniteScroll(data, unSubscribeFn) {
    const bottomToWindowTop = document.body.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    const isToBottom = bottomToWindowTop - windowHeight < buffer;

    if (isToBottom) {
      window.removeEventListener("scroll", unSubscribeFn);
      lastId.current = data.slice(-1)[0]["id"];
      fetchData();
    }
  }

  async function fetchData() {
    try {
      const res = await fetch(`${apiHost}/list?id=${lastId.current}`);
      const newData = await res.json();
      setData((state) => [...state, ...newData]);

      function handleInfiniteScroll() {
        infiniteScroll(newData, handleInfiniteScroll);
      }
      window.addEventListener("scroll", handleInfiniteScroll);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContainerDiv>
      {data.map((data) => (
        <Article key={data.id} data={data} />
      ))}
    </ContainerDiv>
  );
}
