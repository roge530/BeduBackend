import http from 'k6/http';

export default function () {
    const route = 'http://localhost:3000/'
    /*
    let post = http.post('http://localhost:3000/admins', {
        email: 'new1@email.com',
        password: 'newPass'
    })
    console.log(post.body)

    let res = http.get('http://localhost:3000/admins');
    console.log(res.body)
    */
   let getAdminByEmailUrl = route + 'admin/' + 'new1@email.com'
   let getAdminByEmail = http.get(getAdminByEmailUrl)
   console.log(getAdminByEmail.body)
  }