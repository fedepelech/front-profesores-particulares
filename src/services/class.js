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
      console.log('entra aca');
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
  console.log(query);
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_URL}/classes${query}`,
  })
    .then((resp) => resp.data);
}