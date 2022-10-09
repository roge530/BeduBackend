import { group } from 'k6';
import http from 'k6/http';

function printUsers(arrUsers) {
    arrUsers.forEach(user => {
        let nombreCompleto = `${user['nombre']} ${user['apellido_paterno']} ${user['apellido_materno']}`
        let acceso 
        switch (user['tipo_usuario']) {
            case 0:
                acceso = '[asistente]'
                break;
            case 1:
                acceso = '[veterinario]'
                break;
            case 2:
                acceso = '[administrador]'
                break;
            default:
                acceso = '[nulo]'
                break;
        }
        console.log(`${acceso} ${nombreCompleto} Usuario: ${user['usuario']}`)
    });
}

export default function () {
    const route = 'https://veterinaria-api-bedu-2022.herokuapp.com'
    const adminLoginURL = route + '/usuario/logIn'
    const allUsersURL = route + '/usuario/'
    let params, allUsers, arrUsers, vetMalvado

    group('Log in admin', () => {
        const loginAdminData = {
            'usuario': 'admin',
            'password': ''
        }
        const loginAdmin = http.post(adminLoginURL, loginAdminData)
        const loginToken = loginAdmin.json()['token']
        params = {
            headers: {
                'Authorization': 'Bearer ' + loginToken
            }
        }
    })


    group('Obtener los usuarios', () => {
        allUsers = http.get(allUsersURL, params)
        console.log('Se mostraran los datos de los usuarios\n')
        arrUsers = allUsers.json()
        printUsers(arrUsers)
    })

    
    group('Crear un usuario', () => {
        const createUserURL = route + '/usuario/signUp'
        const vetData = {
            "nombre": "Doctor",
            "apellido_paterno": "Malvado",
            "apellido_materno": "Perez",
            "usuario": "evilDude",
            "email": "cobroCaro@yahoo.com",
            "celular": "0001111222",
            "cedula_prof": "XXXXXX",
            "tipo_usuario": 1,
            "password": "paracetamol"
        }
        const createUser = http.post(createUserURL, vetData, params)
        allUsers = http.get(allUsersURL, params)
        console.log('Se ha creado un nuevo usuario\n')
        arrUsers = allUsers.json()
        vetMalvado = allUsers.json()[2]
        printUsers(arrUsers)
    })
    
    group('Modificar un usuario', () => {
        const changeUserURL = route + '/usuario/' + vetMalvado['id']
        const changeUser = http.patch(changeUserURL, {'usuario': 'evilDogtor'}, params)
        allUsers = http.get(allUsersURL, params)
        console.log('Se ha modificado un usuario\n')
        arrUsers = allUsers.json()
        printUsers(arrUsers)
    })


    group('Eliminar un usuario', () => {
        const deleteUserURL = route + '/usuario/' + vetMalvado['id']
        const deleteUser = http.del(deleteUserURL, {}, params)
        allUsers = http.get(allUsersURL, params)
        console.log('Se ha eliminado un usuario\n')
        arrUsers = allUsers.json()
        printUsers(arrUsers)  
    })
}