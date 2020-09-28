import React from "react";
import {MainWrapper} from "./styled";

export const Main = () => {

    const auth = JSON.parse(localStorage.getItem("user"));

    return(
        <MainWrapper>
            {
                auth ? <h2>Welcome {auth.name} </h2> : <h2>Welcome guest</h2>
            }
        </MainWrapper>
    )
};