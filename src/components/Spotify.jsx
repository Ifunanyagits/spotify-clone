import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import styled from 'styled-components'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from '../utils/Constants';


export default function Spotify() {
  const [{ token }, dispatch] = useStateProvider();
  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);
  const bodyRef = useRef();
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);
    bodyRef.current.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };  useEffect(()=> {
    const getUserInfo = async ()=> {
      const {data} = await axios.get('https://api.spotify.com/v1/me', 
      {
        headers: {
          Authorization:'Bearer ' + token,
          'Content-Type': 'application/json',
        },
    });
    const userInfo = {
      userId :data.id,
      userUrl: data.external_urls.spotify,
      name: data.display_name,
    };
    dispatch({type:reducerCases.SET_USER, userInfo});
  };
  getUserInfo();
  }, [dispatch,token]);
  useEffect(() => {
    const getPlaybackState = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me/player", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      dispatch({
        type: reducerCases.SET_PLAYER_STATE,
        playerState: data.is_playing,
      });
    };
    getPlaybackState();
  }, [dispatch, token]);
  return (
    <Container>
      <div className="spotify__body">
        <Sidebar />
        <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
        <Navbar navBackground={navBackground} />
          <div className="body__contents">
          <Body headerBackground={headerBackground} />
          </div>
        </div>
        <LeftSidebar />
      </div>

      <div className="spotify__footer">
        <Footer />
      </div>
    </Container>
  )
}

const Container = styled.div`
max-width: 100vw;
max-height: 100vh;
overflow: hidden;
display: grid;
background-color: #E6E6E6;
grid-template-rows: 90vh 10vh;
.spotify__body {
  display: grid;
  grid-template-columns: 20vw 60vw 20vw;
  height: 100%;
  width: 100%;
  background-color: #E6E6E6;
  .body {
    height: 100%;
    width: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.1rem;
      max-height: 2rem;
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
  }
}
`;