import React from 'react'
import styled from 'styled-components'

export default function LeftSidebar() {
  return (
      <Container>
        <div className="title">Shortcuts</div>
        <div className="top__links">
            <ul>
                <li>
                    ❄Chill Hits
                </li>
                <li>
                    ⭐Hop
                </li>
                <li>
                    🎸Accoustic
                </li>
                <li>
                    🎵Indie Pop
                </li>
                <li>
                    🎹Piano Blues
                </li>
                <li>
                    🎺Jazz
                </li>
            </ul>
        </div>
        <div className="title">Fav Artist</div>
        <div className="bottom__image">
                <img src='./Kana.png' alt="Artist" />
            </div>
    </Container>
  )
}


const Container = styled.div`
color: #272727;
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
.top__links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem;
        li {
            display: flex;
            gap: 1rem;
            background-color: #ffffff;
            border-radius: 30px;
            font-weight: 600;
            padding: 10px  8px;
            cursor: pointer;
            transition: 0.3s ease-in-out;
            &:hover {
                color: #FFFFFF;
                padding: 10px;
                background-color: #414141;
                border-radius: 5%;
            }
          }
    } 
}
.title {
  font-size: 20px;
  font-weight: 700;
  margin: 20px 10px;
}
.bottom__image {
    display: flex;
    background-color: #ffffff;
    padding: 5px 5px 20px 5px;
    margin: 0 20px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    img {
        display: flex;
        justify-content: center;
        height: auto;
        display: block;
        border-radius: 10px;
        max-inline-size: 80%;
        margin: auto;
        }
}
`;