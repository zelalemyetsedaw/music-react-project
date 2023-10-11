import styled from "@emotion/styled";
import React from "react";
import play from "../images/play-solid.svg";
import image from "../images/musicimage.jpg";
import { Link } from "react-router-dom";

const SongItem = styled.div`
  width: 220px;
  height: 350px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 5px 5px 5px #888888;
  }
`;

const SongImage = styled.img`
  padding: 5px;
  width: 200px;
  height: 250px;
`;

const SongInfo = styled.div`
  margin-top: 5px;
  margin-left: 0px;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  padding: 6px;
`;

const Playicon = styled.div`
  width: 20px;
  height: 20px;
  padding-top: 10px;
  padding-right: 30px;
  img {
    width: 25px;
    height: 25px;
  }
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const Artist = styled.span`
  font-size: 18px;
`;

const SongTitle = styled.div`
  display: flex;
  padding-left: 5px;
  flex-direction: column;
  gap: 5px;
`;

const MusicCard = ({ song }) => {
  return (
    <div>
      <SongItem key={song.id}>
        <Link to={`/songlist/${song.id}`}>
          <SongImage src={image} alt="song image" />
        </Link>
        <SongInfo>
          <SongTitle>
            <Title>{song.title}</Title>
            <Artist>{song.artist}</Artist>
          </SongTitle>
          <Playicon>
            <img src={play} alt="" />
          </Playicon>
        </SongInfo>
      </SongItem>
    </div>
  );
};

export default MusicCard;
