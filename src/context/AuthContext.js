import React from 'react';

const AuthContext = React.createContext({
    authenticated: false,
    loginHandler: () => {}
});

export default AuthContext