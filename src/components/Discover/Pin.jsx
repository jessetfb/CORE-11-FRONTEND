import React from "react";
import styled from "styled-components";

function Pin({ urls, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <Image src={urls.thumb} alt="pin" />
    </Wrapper>
  );
}

export default Pin;

const Wrapper = styled.div`
  display: inline-block;
  padding: 8px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.35);
  }
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  cursor: zoom-in;
  object-fit: cover;
  border-radius: 10px;
`;
