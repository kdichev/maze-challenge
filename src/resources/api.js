import axios from "axios";

const API_URL = "https://ponychallenge.trustpilot.com/pony-challenge";
if (API_URL == null) throw new Error("NO API ENDPOINT");

const { post, get } = axios.create({
  baseURL: API_URL
});

export const createGame = ({ width, height, name, difficulty = 0 }) =>
  post("maze", {
    "maze-width": width,
    "maze-height": height,
    "maze-player-name": name,
    difficulty
  });

export const getGame = id => get(`maze/${id}`);

export const movePlayer = (id, direction) =>
  post(`maze/${id}`, {
    direction
  });
