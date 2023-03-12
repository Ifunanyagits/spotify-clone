import React from 'react'
import styled from "styled-components"

export default function Login() {
    const handleClick = ()=>{
        const client_id = '4fb00c1aaa3648be8fe712e5673dd668';
        const redirect_url = "http://localhost:3000";
        const api_url = 'https://accounts.spotify.com/authorize';
        const scope = [
            'user-read-private',
            'user-read-email',
            'user-modify-playback-state',
            'user-read-playback-state',
            'user-read-currently-playing',
            'user-read-recently-played',
            'user-top-read',
        ];
        window.location.href = `${api_url}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope.join(
            ' '
        )}&response_type=token&show_dialog=true`;
    }
  return (
    <Container>
        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png' alt='Spotify Logo' />
        <button onClick={handleClick}>Login</button>
    </Container>
    )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100vw;
Height: 100vh;
background-color: #1db954;
gap:5rem;
img{
    height: 20vh;
}
button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: #000000;
    color: #49f585;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}
`