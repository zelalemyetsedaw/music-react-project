import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMusicsFetch } from "../redux/musicState";
import MusicCard from "../components/MusicCard";
import Loading from "../components/Loading";

const SongListContainer = styled.div`
  background: #f7f7f7;
  margin: auto;
  position: relative;
`;

const SongContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 35px;
  flex-wrap: wrap;
  padding-left: 60px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

function SongList() {
  const musics = useSelector((state) => state.musics.musics);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    dispatch(getMusicsFetch());
    setIsLoading(false);
  }, [dispatch]);

  return (
    <SongListContainer>
      <Header />

      {isLoading ? (
        <Loading />
      ) : (
        <SongContainer>
          {musics.map((song) => (
            <div key={song.id}>
              <MusicCard key={song.id} song={song} />
            </div>
          ))}
        </SongContainer>
      )}
    </SongListContainer>
  );
}

export default SongList;
