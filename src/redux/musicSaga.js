import { call, put, takeEvery } from "redux-saga/effects";
import {
  createMusicFailure,
  createMusicSuccess,
  deleteMusicFailure,
  deleteMusicSuccess,
  getMusicsSuccess,
  updateMusicFailure,
  updateMusicSuccess,
} from "./musicState";

function* workCreateMusic(action) {
  try {
    const response = yield call(() =>
      fetch("http://localhost:3001/music", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      })
    );
    const newMusic = yield response.json();
    yield put(createMusicSuccess(newMusic));
  } catch (error) {
    yield put(createMusicFailure(error));
  }
}

function* workUpdateMusic(action) {
  try {
    const response = yield call(() =>
      fetch(`http://localhost:3001/music/${action.payload.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload.updatedData),
      })
    );

    if (response.status !== 200) {
      alert("updating is failed")
    }
    yield put(
      updateMusicSuccess({
        id: action.payload.id,
        updatedData: action.payload.updatedData,
      })
    );
  } catch (error) {
    yield put(updateMusicFailure(error));
  }
}

function* workGetMusicsFetch() {
  const musics = yield call(() => fetch(" http://localhost:3001/music"));
  const formattedMusics = yield musics.json();
  const formattedMusicsShortened = formattedMusics.slice(0, 10);

  yield put(getMusicsSuccess(formattedMusicsShortened));
}

function* workDeleteMusic(action) {
  try {
    yield call(() =>
      fetch(`http://localhost:3001/music/${action.payload}`, {
        method: "DELETE",
      })
    );
    yield put(deleteMusicSuccess(action.payload)); 
  } catch (error) {
    yield put(deleteMusicFailure(error));
  }
}
function* musicSaga() {
  yield takeEvery("musics/getMusicsFetch", workGetMusicsFetch);
  yield takeEvery("musics/createMusicRequest", workCreateMusic);
  yield takeEvery("musics/deleteMusicRequest", workDeleteMusic);
  yield takeEvery("musics/updateMusicRequest", workUpdateMusic);
}

export default musicSaga;
