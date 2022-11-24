import axios from 'axios';

export function getTeacherInformation(teacherId) {
    return axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/teacher/${teacherId}`
      })
        .then((resp) => resp.data);
}