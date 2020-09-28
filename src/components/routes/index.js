import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {Main} from "../../pages/main";
import {News} from "../../pages/news";
import Profile from "../../pages/profile";
import AddNews from "../../pages/addNews";
import AdminPage from "../../pages/adminPage";

const useRoutes = (isAuth, isAdmin) => {

    if (isAuth) {
        if(isAdmin){
            return (
                <Switch>
                    <Route exact path={'/'} component={Main}/>
                    <Route exact path={'/admin'} component={AdminPage}/>
                    <Redirect to='/'/>
                </Switch>
            )
        }
        return (
            <Switch>
                <Route exact path={'/'} component={Main}/>
                <Route path={'/profile'} component={Profile} exact/>
                <Route path={'/add'} component={AddNews} exact/>
                <Redirect to='/'/>
            </Switch>
        )
    }


    return (
        <Switch>
            <Route exact path={'/'} component={Main}/>
            <Route path={'/news'} component={News}/>
            <Redirect to='/'/>
        </Switch>
    )
};


export default useRoutes
