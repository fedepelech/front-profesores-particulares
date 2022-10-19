import axios from 'axios';

export function loginService(email, password) {
  return axios({
    method: 'post',
    data: {
      email,
      password,
    },
    url: `${process.env.REACT_APP_API_URL}/login`,
  })
    .then((resp) => resp.data);
}
