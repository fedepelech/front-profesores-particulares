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

export function signupService(information) {
  return axios({
    method: 'post',
    data: information,
    url: `${process.env.REACT_APP_API_URL}/signup`,
  })
    .then((resp) => resp.data);
}

export function restorePassword(email) {
  return axios({
    method: 'post',
    data: {email},
    url: `${process.env.REACT_APP_API_URL}/me/password/restore`,
  })
    .then((resp) => resp.data);
}

export function sendNewPassword(token, newPassword) {
  return axios({
    method: 'post',
    data: {newPassword},
    url: `${process.env.REACT_APP_API_URL}/me/new-password`,
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((resp) => resp.data);
}