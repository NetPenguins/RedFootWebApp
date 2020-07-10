import React, { Component } from "react";
import {logout} from "../lib/authUtils";
import { getFirebase } from "../lib/util";
const Logout = () => {
    return(
        <button className="button is-danger" id="logout" onClick={() => {
                logout();
                console.log(auth)
                if(window){
                    window.location.reload();
                }
            }}>
            Logout
        </button>
    )
}

export default Logout;