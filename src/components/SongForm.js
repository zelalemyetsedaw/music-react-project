import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { createMusicRequest, updateMusicRequest } from "../redux/musicState";

const Form = styled.form`
  width: 300px;
  height: 300px;
  border: 1px solid gray;
  box-shadow: 0 6px 6px black;
  padding: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormLabel = styled.label`
  padding-right: 4px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 16px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;


const AddButton = styled.button`
  background-color: yellow;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: gray;
  }
`;

function SongForm({ initialValues, isUpdate = false, id }) {
  const [title, setTitle] = useState(initialValues.title || "");
  const [artist, setArtist] = useState(initialValues.artist || "");
  const [album, setAlbum] = useState(initialValues.album || "");
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const songData = {
        title,
        artist,
        album,
      };

      if (isUpdate) {
        if (
          title !== initialValues.title ||
          artist !== initialValues.artist ||
          album !== initialValues.album
        ) {
          try {
            await dispatch(updateMusicRequest({ id, updatedData: songData }));
            alert("Update successful");
            window.location.href = "/songlist";
          } catch (error) {
            console.error("Update failed:", error);
          }
        }
      } else {
        dispatch(createMusicRequest(songData));
        alert("music added successfully")
      }
    },
    [dispatch, isUpdate, initialValues, title, artist, album,id]
  );

  return (
    <Form>
      <FormLabel>
        <strong>Title:</strong>
        <FormInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the song title"
        />
      </FormLabel>
      <FormLabel>
        <strong>Artist:</strong>
        <FormInput
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Enter the artist name"
        />
      </FormLabel>
      <FormLabel>
        <strong>Album:</strong>
        <FormInput
          type="text"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
          placeholder="Enter the album name"
        />
      </FormLabel>
      <AddButton type="submit" onClick={handleSubmit}>
        {isUpdate ? "Update" : "Submit"}
      </AddButton>
    </Form>
  );
}

export default SongForm;
