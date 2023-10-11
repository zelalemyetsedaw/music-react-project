import { createSlice } from "@reduxjs/toolkit";

export const musicSlice = createSlice({
  name: "musics",
  initialState: {
    musics: [],
    isLoading: false,
  },
  reducers: {
    getMusicsFetch: (state) => {
      state.isLoading = true;
    },
    getMusicsSuccess: (state, action) => {
      state.musics = action.payload;
      state.isLoading = false;
    },
    getMusicsFailure: (state) => {
      state.isLoading = false;
    },
    createMusicRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    createMusicSuccess: (state, action) => {
      state.musics.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    createMusicFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteMusicRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    deleteMusicSuccess: (state, action) => {
      state.musics = state.musics.filter(
        (music) => music.id !== action.payload
      );
      state.isLoading = false;
      state.error = null;
    },
    deleteMusicFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateMusicRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    updateMusicSuccess: (state, action) => {
      const { id, updatedData } = action.payload;
      const musicToUpdate = state.musics.find((music) => music.id === id);
      if (musicToUpdate) {
        Object.assign(musicToUpdate, updatedData);
      }
      state.isLoading = false;
      state.error = null;
    },
    updateMusicFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getMusicsFetch,
  getMusicsSuccess,
  getMusicsFailure,
  createMusicRequest,
  createMusicSuccess,
  createMusicFailure,
  deleteMusicRequest,
  deleteMusicSuccess,
  deleteMusicFailure,
  updateMusicRequest,
  updateMusicSuccess,
  updateMusicFailure,
} = musicSlice.actions;

export default musicSlice.reducer;
