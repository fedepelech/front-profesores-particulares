import axios from 'axios';

export function getStudentInformation(studentId) {
    return axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/student/${studentId}`,
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
        .then((resp) => resp.data);
}