import axios from "axios";

export async function getData() {
  let res = await fetch(`${process.env.BASE_URL}/departments`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getDoctors() {
  let res = await axios.get(`${process.env.BASE_URL}/doctors`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  return res;
}
