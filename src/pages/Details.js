import React, { useEffect, useState } from "react";
import image from "../images/musicimage.jpg";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import Header from "../components/Header";
import forward from "../images/forward.svg";
import backward from "../images/backward.svg";
import play from "../images/play-solid.svg";
import stop from "../images/pause-solid.svg";
import { deleteMusicRequest } from "../redux/musicState";

const Container = styled.div`
  background: #f7f7f7;
`;

const AddButton = styled.button`
  width: 200px;
  height: 35px;
  margin-top: 10px;
  background-color: ${(props) => props.backgroundColor || "#FF0000AA"};
  color: black;
  border: none;
  padding: 1px 10px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

const Image = styled.div`
  img {
    width: 80%;
    text-align: center;
    height: 60vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    object-fit: cover;
  }
`;

const MusicInfo = styled.div`
  padding-top: 20px;
  width: 80%;
  margin: auto;
  display: flex;
  gap: 15px;
  align-items: center;

  img {
    width: 50px;
    height: 60px;
  }
  
  span {
    font-size: 20px;
    
  }
`;

const Audio = styled.div`
  margin: auto;
  padding-top: 5px;
  padding-left: 30px;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
  }
`;

const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  padding-bottom: 10px;
  gap: 2px;
  justify-content: center;
`;

const Details = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { id } = useParams();

  const musics = useSelector((state) => state.musics.musics);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const dispatch = useDispatch();
  const handleDeleteSong = (musicId) => {
    dispatch(deleteMusicRequest(musicId));
    alert("music deleted successfully")
  };

  useEffect(() => {
    const currentIndex = musics.findIndex(
      (music) => music.id === parseInt(id, 10)
    );
    if (currentIndex !== -1) {
      setCurrentSongIndex(currentIndex);
    }
  }, [musics, id]);

  const playPreviousSong = () => {
    console.log("play previeous", currentSongIndex);

    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  const playNextSong = () => {
    console.log("play next", currentSongIndex);
    if (currentSongIndex < musics.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const song = musics[currentSongIndex];

  if (!song) {
    return <div>Song not found</div>;
  }

  return (
    <Container>
      <Header />
      <Image>
        <img src={image} alt="" />
      </Image>

      <MusicInfo>
        <img src={image} alt="" />
        <div>
          <span> {song.title} </span>
          <br />
          <span> {song.artist} </span>
        </div>
      </MusicInfo>
      <Audio>
        <div onClick={playPreviousSong}>
          <img src={backward} alt="" />
        </div>
        <div onClick={togglePlayPause}>
          <img src={isPlaying ? stop : play} alt="" />{" "}
        </div>
        <div onClick={playNextSong}>
          <img src={forward} alt="" />
        </div>
      </Audio>

      <Buttons>
        <AddButton backgroundColor="green">
          <Link to={`/updatemusic/${song.id}`}>Update</Link>{" "}
        </AddButton>

        <AddButton onClick={() => handleDeleteSong(song.id)}>delete</AddButton>
      </Buttons>
    </Container>
  );
};

export default Details;
