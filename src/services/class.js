import axios from 'axios';

export function getClasses() {
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_URL}/classes`,
  })
    .then((resp) => resp.data);
}