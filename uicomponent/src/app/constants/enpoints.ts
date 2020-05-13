
/*
    dev = deployed env
    local = localhost => eg. http://localhost:4040/login
*/
const env = 'local';
export class Endpoints {
    static endpoints = {
        login: env === 'local' ? 'http://localhost:4040/login' : '/local',
        register: env === 'local' ? 'http://localhost:4040/register' : '/register'
    };
}