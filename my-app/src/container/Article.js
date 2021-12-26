import React from "react";
import styled from "styled-components";

const ArticleStyle = styled.article`
  border-bottom: 1px #ccc solid;
  padding: 40px 0;
`;

const TitleDiv = styled.div`
  font-size: 1.2rem;
  line-height: 2.4rem;
  font-weight: bold;
`;

const ExcerptDiv = styled.div`
  color: #666;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export default function Article({ data }) {
  const { title, excerpt } = data;
  return (
    <ArticleStyle>
      <TitleDiv>{title}</TitleDiv>
      <ExcerptDiv>{excerpt}</ExcerptDiv>
    </ArticleStyle>
  );
}
