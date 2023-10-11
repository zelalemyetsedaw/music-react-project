import React from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import Header from "../components/Header";
import { createMusicRequest } from "../redux/musicState";
import SongForm from "../components/SongForm";

const SongListContainer = styled.div`
  background: #f7f7f7;
  text-align: center;
  padding: 8px;
  margin: auto;
  height: 100vh;

  h2 {
    padding-right: 20px;
  }
`;

function AddSong() {
  const dispatch = useDispatch();

  const handleAddMusic = (musicData) => {
    dispatch(createMusicRequest(musicData));
  };

  return (
    <SongListContainer>
      <Header />
      <h2>Add Song</h2>
      <SongForm onSubmit={handleAddMusic} initialValues={{}} />
    </SongListContainer>
  );
}

export default AddSong;
