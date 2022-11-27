import axios from 'axios';

export function getClasses() {
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_URL}/classes`,
  })
    .then((resp) => resp.data);
}

export function getClassesWithFilters({ filters = null}) {
  let query = '';
  if (filters) {
    query = '?'
    let firstFilter = false;
    if(filters.name) {
      query += `name=${filters.name}`;
      firstFilter = true;
    }
    if(filters.subject) {
      if(firstFilter) {
        query += `&subject=${filters.subject}`;
      } else {
        query += `subject=${filters.subject}`;
        firstFilter = true;
      }
    }
    if(filters.grupal) {
      if(firstFilter) {
        query += `&grupal=${filters.grupal === 'Grupal'}`;
      } else {
        query += `grupal=${filters.grupal === 'Grupal'}`;
        firstFilter = true;
      }
    }
    if(filters.frequency) {
      if(firstFilter) {
        query += `&frequency=${filters.frequency}`;
      } else {
        query += `frequency=${filters.frequency}`;
        firstFilter = true;
      }
    }
    if(filters.calification) {
      if(firstFilter) {
        query += `&calification=${filters.calification}`;
      } else {
        query += `calification=${filters.calification}`;
      }
    }
  }
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_URL}/classes${query}`,
  })
    .then((resp) => resp.data);
}

export function getClassesByUser() {
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_URL}/my-classes`,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  })
    .then((resp) => {
      return resp.data;
    });
}

export function createComment(classId, content) {
  return axios({
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/comment/create`,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    data: {
      id: classId,
      content
    }
  })
    .then((resp) => {
      return resp.data;
    });
}

export function statusComment(commentId, classId, status, reasonBlocked = '') {
  return axios({
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/class/${classId}/status-comment`,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    data: {
      status,
      commentId,
      reasonBlocked
    }
  })
    .then((resp) => {
      return resp.data;
    });
}

export function editClass(classToModify) {
  return axios({
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/class/${classToModify.id}/edit`,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    data: classToModify
  })
}

export function fileUpload(file) {
  return axios({
    method: 'post',
    data: file,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    url: `${process.env.REACT_APP_API_URL}/upload-file`,
  })
    .then((resp) => resp.data);
}

export function createClass(classToCreate) {
  return axios({
    method: 'post',
    data: classToCreate,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    url: `${process.env.REACT_APP_API_URL}/class/create`,
  })
    .then((resp) => resp.data);
}

export function createSuscriptionSvc(data, classId) {
  return axios({
    method: 'post',
    data: data,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    url: `${process.env.REACT_APP_API_URL}/class/${classId}/suscription`,
  })
    .then((resp) => resp.data);
}

export function getSuscriptions(classId) {
  return axios({
    method: 'get',
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    url: `${process.env.REACT_APP_API_URL}/class/${classId}/suscriptions`,
  })
    .then((resp) => resp.data);
}

export function acceptSuscriptionClass(subId) {
  return axios({
    method: 'post',
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    url: `${process.env.REACT_APP_API_URL}/class/${subId}/accept-suscription`,
  })
    .then((resp) => resp.data);
}

export function cancelSuscriptionClass(subId, status) {
  return axios({
    method: 'post',
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    url: `${process.env.REACT_APP_API_URL}/suscriptions/change-status/${subId}`,
    data: {status},
  })
    .then((resp) => resp.data);
}

export function createOrUpdateValoration(valoration, classId) {
  return axios({
    method: 'post',
    data: {valoration},
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    url: `${process.env.REACT_APP_API_URL}/class/${classId}/valoration`,
  })
    .then((resp) => resp.data);
}