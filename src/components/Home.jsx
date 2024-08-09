import React from "react";
import styled from "styled-components";
import Pin from "./Discover/Pin";

function Home({ pins = [], onImageClick }) {
  // Early return if no pins are available
  if (pins.length === 0) {
    return <NoPinsMessage>No pins available</NoPinsMessage>;
  }

  return (
    <Wrapper>
      <Container>
        {pins.map((pin, index) => {
          const { urls } = pin;
          return (
            <Pin
              key={pin.id || index} // Prefer using a unique id if available
              urls={urls}
              onClick={() => onImageClick(pin)}
            />
          );
        })}
      </Container>
    </Wrapper>
  );
}

export default Home;

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
  max-width: 3200px; /* Adjusted width for better readability on large screens */
  display: flex;
  flex-wrap: wrap;
  gap: 15px; /* Increased gap for better spacing */
  justify-content: center;
  padding: 0 20px; /* Added horizontal padding for better alignment */
`;

const NoPinsMessage = styled.div`
  font-size: 1.5rem;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Ensure it covers the full viewport height */
`;
