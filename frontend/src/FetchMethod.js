import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjllODkyNDc1MTRiY2UzN2E3MDI0MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDY2Mjk1NywiZXhwIjoxNjYxMjY3NzU3fQ.-G1lVvxxOd6BImotaWNVXTIqenisKFuqqd2QigWe-h8";

export const products = axios.create({
  baseURL: BASE_URL,
});

export const users = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
