import http from 'k6/http';

export default function() {
    const route = 'http://localhost:8012'
    const vetLoginUrl = route + '/user/logIn/'
    const vetData = {
        'user': 'vet',
        'password': 'usuario'
    }
    const vetLogin = http.post(vetLoginUrl, vetData)
    //const loginToken = vetLogin.json()['token'] 
    console.log(JSON.stringify(vetLogin, null, 4))
}