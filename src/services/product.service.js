import axios, { Axios } from "axios";

const data = axios.create({
  baseURL: "https://64eef2c1219b3e2873c3ae62.mockapi.io/product/table",
});

export const GetBranch = () => {
  return data.get();
};

export const GetByID = (id) => {
  return data.get(`/${id}`);
};

export const UpdateBranch = (id, body) => {
  return data.put(`/${id}`, body);
};

export const DeleteBranch = (id) => {
  return data.delete(`/${id}`)
}
export const AddBranch = (body) =>{
  return data.post("",body)
}