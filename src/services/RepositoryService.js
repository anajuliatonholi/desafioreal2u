import axios from "axios";

export async function getRepositoryData(name) {
  const response = await axios.get(
    `https://api.github.com/users/${name}/repos`
  );
  const { data } = response;
  return data;
}
