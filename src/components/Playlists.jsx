import React,{useEffect} from 'react'
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios';
import { reducerCases } from '../utils/Constants';
import styled from 'styled-components';


export default function Playlists() {
    const  [{ token, playlists }, dispatch] = useStateProvider();
    useEffect(()=> {
        const getPlaylistData = async () => {
            const response = await axios.get(
                'https://api.spotify.com/v1/me/playlists', 
                {
                    headers: {
                        Authorization:'Bearer ' + token,
                        'Content-Type': 'application/json',
                    },
                }
            );
            const { items } = response.data;
            const playlists = items.map(({name,id}) => {
                return {name,id};
            });
            dispatch({type:reducerCases.SET_PLAYLISTS, playlists });
        };
        getPlaylistData();
    },[token,dispatch]);
    const changeCurrentPlaylist = (selectedPlaylistId) => {
        dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
      };
  return (
    <Container>
        <ul>
            {playlists.map(({ name, id }) => {
            return (
                <li key={id} onClick={() => changeCurrentPlaylist(id)}>
                {name}
                </li>
            );
            })}
        </ul>
    </Container>
  )
}


const Container = styled.div`
height: 100%;
overflow: hidden;
    ul {
        list-style-type: none;
        display: flex;
        color: #202020;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        height: 50vh;
        max-height: 100%;
        overflow: auto;
        &::-webkit-scrollbar {
            width: 0.7rem;
            &-thumb {
                background-color: #6b6a6a;
            }
        }
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
                background-color: #1a1a1a;
                border-radius: 20px;
            }
        }
    }
`;