import React, {useEffect} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {connect} from 'react-redux';
import NavBar from './components/navBar/index';
import useRoutes from "./components/routes";
import {isAuthMethod, isAdminMethod} from "./store/auth/actions";


function App({isAdmin, isAuth, isAuthMethod, isAdminMethod}) {
    // const auth = JSON.parse(localStorage.getItem("user"))

    const routes = useRoutes(isAuth, isAdmin);
    // const routes = useRoutes(auth);
    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem("user"));

        if(auth){
            isAuthMethod(!isAuth);
            if(auth.role === "admin"){
                console.log(auth.role);
                isAdminMethod(!isAdmin)
            }
        }
        // eslint-disable-next-line
    },[]);


    return (
        <div className={'app'}>
            <Router>
                <NavBar isAuth={isAuth} isAdmin={isAdmin}/>
                {routes}
            </Router>
        </div>
    );
}

const mapStateToProps = state => ({
    isAuth:  state.auth.isAuth,
    isAdmin: state.auth.isAdmin
});

const mapDispatchToProps ={
    isAuthMethod,
    isAdminMethod
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
