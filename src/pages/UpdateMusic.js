import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import SongForm from "../components/SongForm";
import {  useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SongListContainer = styled.div`
  background: white;
  h2{
    text-align: center;
  }
`;

function UpdateMusic() {
  const { id } = useParams();
  const musics = useSelector((state) => state.musics.musics);
  const selectedMusic = musics.find((music) => music.id === parseInt(id, 10));

  return (
    <SongListContainer>
      <Header />
      <h2>Update Music</h2>
      <SongForm initialValues={selectedMusic} id={id} isUpdate={true} />
    </SongListContainer>
  );
}

export default UpdateMusic;
