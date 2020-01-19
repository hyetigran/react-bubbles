import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.get("token");

  axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
};
