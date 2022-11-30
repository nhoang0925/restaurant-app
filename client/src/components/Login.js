import React, { useEffect, useState, } from "react";
import axios from 'axios';

import {
    Typography,
} from "@mui/material";

const Login = () => {

    const url = 'http://localhost:3000/api/login'

    const [data, setData] = useState({
    login_username:"",
    login_password:"",
    })

    function handle(e){

        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    function submit(e){
        //alert("Successfully Registered");
        e.preventDefault();
        axios.post(url,{
            login_username: data.login_username,
            login_password: data.login_password,
       })
        .then(res=>{
            console.log(res.data);
        })
};

    return(
    <div className = 'register'>
        <h1><Typography align="left" style={{color:'orange', fontSize: 50}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register</Typography></h1>
        <Typography align="center" style={{paddingTop: "30px"}}></Typography>
        <h4>&nbsp;Enter Login Information</h4>

        <form onSubmit={(e)=> submit(e)}>
        <div><Typography align="left" style={{paddingTop: "5px" }}>
                &nbsp;&nbsp; User &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            
                <input type = "String" style={{fontSize: 15}} onChange={(e)=>handle(e)} id="login_username" value={data.login_username} />
        </Typography></div>
        
        <div><Typography align="left" style={{paddingTop: "5px" }}>
                &nbsp;&nbsp; Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        
                <input type = "String" style={{fontSize: 15}} onChange={(e)=>handle(e)} id="login_password" value={data.login_password} />
        </Typography></div>

    
        <Typography align="center" style={{paddingTop: "20px" }}></Typography>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="submit">Submit</button>
        </form>

    </div>

    );

}

export default Login