import React, { useEffect, useState, } from "react";
import axios from 'axios';

import {
    Typography,
} from "@mui/material";

const Login = () => {

    const [usernameLogin, setUsernameLogin] = useState('userLog');
    const [passwordLogin, setPasswordLogin] = useState('passLog');
    //console.log(reserves);
    var username = "guest1";
    var password = "password123";

    return(
    <div className = 'register'>
        <h1><Typography align="left" style={{color:'orange', fontSize: 50}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register</Typography></h1>
        <Typography align="center" style={{paddingTop: "30px"}}></Typography>
        <h4>&nbsp;Enter Registration Information</h4>

        <form>
        <div><Typography align="left" style={{paddingTop: "5px" }}>
                &nbsp;&nbsp; User &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            
                <input type = "String" onChange={(e)=> {setUsernameLogin(e.target.value)}}/>
        </Typography></div>
        
        <div><Typography align="left" style={{paddingTop: "5px" }}>
                &nbsp;&nbsp; Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            
                <input type = "String" onChange={(e)=> {setPasswordLogin(e.target.value)}}/>
        </Typography></div>
        </form>

    
        <Typography align="center" style={{paddingTop: "20px" }}></Typography>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="submit">Submit</button>


    </div>

    );

}

export default Login