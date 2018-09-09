import axios from "axios";

const API_URL = "https://ponychallenge.trustpilot.com/pony-challenge";
if (API_URL == null) throw new Error("NO API ENDPOINT");

const { post, get } = axios.create({
  baseURL: API_URL
});

export const createGame = ({ width, height, name, difficulty = 0 }) =>
  post("maze", {
    "maze-width": parseInt(width, 10),
    "maze-height": parseInt(height, 10),
    "maze-player-name": name,
    difficulty: parseInt(difficulty, 10)
  });

export const getGame = id => get(`maze/${id}`);

export const movePlayer = (id, direction) =>
  post(`maze/${id}`, {
    direction
  });
