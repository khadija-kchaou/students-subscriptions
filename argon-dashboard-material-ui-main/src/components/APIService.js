import axios from "axios"

export default class APIService {
    
    static UpdateCenter(center_id, body, token) {

     return axios.put(`http://127.0.0.1:8000/certificationcenters/${center_id}/`, {
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }, 

     }).then(resp => resp.json())
 

    }

    static AddCenter(body, token) {

      return fetch('http://127.0.0.1:8000/certificationcenters/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())

    }

    static DeleteCenter(center_id, token) {

      return axios.delete(`http://127.0.0.1:8000/certificationcenters/${center_id}/`, {
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }

     })

    }  


}