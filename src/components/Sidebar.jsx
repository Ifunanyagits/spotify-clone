import React from 'react'
import styled from 'styled-components'
import {IoLibrary} from 'react-icons/io5'
import {MdHomeFilled,MdSearch} from 'react-icons/md'
import Playlists from './Playlists'

export default function Sidebar() {
  return (
    <Container>
        <div className="top__links">
            <div className="logo">
                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png" alt="Spotify Logo" />
            </div>
            <ul>
                <li>
                    <MdHomeFilled />
                    <span>Home</span>
                </li>
                <li>
                    <MdSearch />
                    <span>Trends</span>
                </li>
                <li>
                    <IoLibrary />
                    <span>Feed</span>
                </li>
            </ul>
        </div>
        <Playlists />
    </Container>
  )
}


const Container = styled.div`
background-color: #eeeded;
color: #1d1d1d;
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
.top__links {
    display: flex;
    flex-direction: column;
    .logo {
        text-align: center;
        margin: 1rem 0;
        img {
            max-inline-size: 80%;
            block-size: auto;
        }
    }
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        li {
            display: flex;
            gap: 1rem;
            border-radius: 30px;
            font-weight: 600;
            padding: 10px;
            cursor: pointer;
            transition: 0.3s ease-in-out;
            &:hover {
                color: #FFFFFF;
                padding: 10px;
                background-color: #181818;
                border-radius: 5%;
            }
        }
    }
}
`;