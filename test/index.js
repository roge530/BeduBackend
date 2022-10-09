import http from 'k6/http';

export default function () {
    const route = "http://localhost:3310/"
    /*
    let post = http.post('http://localhost:3000/admins', {
        email: 'new1@email.com',
        password: 'newPass'
    })
    console.log(post.body)

    let res = http.get('http://localhost:3000/admins');
    console.log(res.body)
    */

   let getMainRoute = http.get(route)
   console.log(getMainRoute.body)
  }