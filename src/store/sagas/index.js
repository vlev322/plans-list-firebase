import { fork } from "redux-saga/effects";

export function* startup() {
  yield console.log("Sagas working..");
}

export default function* root() {
  yield fork(startup);
}
