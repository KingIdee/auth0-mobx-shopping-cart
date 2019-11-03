import createAuth0Client from '@auth0/auth0-spa-js';

window.addEventListener('load', async () => {
    window.auth0 = await createAuth0Client({
      domain: 'AUTH0_DOMAIN',
      client_id: 'AUTH0_CLIENT_ID',
      audience: 'AUTH0_AUDIENCE',
      redirect_uri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });
  });

export default class Auth {
    constructor() {

        this.auth0 = window.auth0;
        this.getProfile = this.getProfile.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    async getProfile() {
        const user = await window.auth0.getTokenSilently();
        return user;
    }

    async handleAuthentication() {
        const result = await window.auth0.handleRedirectCallback();
        const token = await window.auth0.getTokenSilently();
        this.idToken = token;
    }

    isAuthenticated() {
        if(this.idToken) {
            return true;
        }else{
            return false;
        }
    }

    login() {
        console.log(window.auth0, "Promise me");
        window.auth0.loginWithRedirect();
    }

    logout() {
        window.auth0.logout();
    }

}
