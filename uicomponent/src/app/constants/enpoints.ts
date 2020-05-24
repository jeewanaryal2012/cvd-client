
/*
    dev = deployed env
    local = localhost => eg. http://localhost:4040/login
*/

const env = 'local';
export class Endpoints {
    // static endpoints = {
    //     // login: env === 'local' ? 'http://localhost:4040/login' : 'https://codiv-azure-app.azurewebsites.net/login',
    //     // register: env === 'local' ? 'http://localhost:4040/register' : '/register'
    //     login: location.href.indexOf('localhost') > -1 ? 'http://localhost:4040/login' : 'https://codiv-azure-app.azurewebsites.net/login',
    //     register: location.href.indexOf('localhost') > -1
    //         ? 'http://localhost:4040/register' : 'https://codiv-azure-app.azurewebsites.net/register'
    // };

    static endpoints = Endpoints.whichEnv();

    static whichEnv() {
        const local = location.href.indexOf('localhost') > -1;
        const azure = location.href.indexOf('azure') > -1;
        let endpoints = {
            login: '',
            register: ''
        };
        if (local === true) {
            endpoints = {
                login: 'http://localhost:4040/login',
                register: 'http://localhost:4040/register'
            };
        } else if (azure === true) {
            endpoints = {
                login: 'https://codiv-azure-app.azurewebsites.net/login',
                register: 'https://codiv-azure-app.azurewebsites.net/register'
            };
        }

        return endpoints;
    }
}