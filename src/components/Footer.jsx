import React from 'react'
import styled from 'styled-components';
import CurrentTrack from "./CurrentTrack";
import PlayerControls from "./PlayerControls";
import Volume from "./Volume";

export default function Footer() {
  return (
    <Container>
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </Container>  )
}

const Container = styled.div`
background-color: #ffffff;
height: 100%;
width: 60%;
margin-left: 20%;
bottom: 10px;
display: grid;
grid-template-columns: 1fr 2fr 1fr;
align-items: center;
justify-content: center;
border-radius: 10px;
padding: 0 1rem;
`;