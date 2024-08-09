import React from "react";
import styled from "styled-components";
import Pin from "./Pin";

function Mainboard({ pins, onImageClick }) {
  return (
    <Wrapper>
      <Container>
        {pins.map((pin, index) => {
          let { urls } = pin;
          return <Pin key={index} urls={urls} onClick={() => onImageClick(pin)} />;
        })}
      </Container>
    </Wrapper>
  );
}

export default Mainboard;

const Wrapper = styled.div`
  background-color: #f0f0f0; /* Light gray background for better contrast */
  display: flex;
  width: 100%;
  min-height: 100vh; /* Ensure it covers the full viewport height */
  padding-top: 100px; /* Adjusted padding for better alignment */
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 3200px; /* Limit the maximum width for better readability on large screens */
  display: flex;
  flex-wrap: wrap;
  gap: 15px; /* Increased gap for better spacing */
  justify-content: center;
  padding: 0 20px; /* Added horizontal padding for better alignment */
`;
