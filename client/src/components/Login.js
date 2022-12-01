import React, { useEffect, useState, } from "react";
import axios from 'axios';

import {
    Typography,
} from "@mui/material";
//import { response } from "express";

const Login = () => {

    const url = 'http://localhost:3000/api/login'

    const [data, setData] = useState({
    login_username:"",
    login_password:"",
    })

    const[loginStatus1, setLoginStatus1] = useState(false);
    const[loginStatus2, setLoginStatus2] = useState(false);
    const[loginStatus3, setLoginStatus3] = useState(false);
    const[loginStatus4, setLoginStatus4] = useState(false);
    const[loginStatus5, setLoginStatus5] = useState(false);
    const[loginStatus6, setLoginStatus6] = useState(false);
    const[loginStatus7, setLoginStatus7] = useState(false);

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
            if(res.data.message){
                setLoginStatus1(res.data.message)
            } else {
                setLoginStatus1(res.data[0].user)
                setLoginStatus2(res.data[0].name)
                setLoginStatus3(res.data[0].billing)
                setLoginStatus4(res.data[0].mailing)
                setLoginStatus5(res.data[0].payment)
                setLoginStatus6(res.data[0].diner)
                setLoginStatus7(res.data[0].points)
            }
            console.log(res.data);
        })
};

    return(
    <div className = 'register'>
        <h1><Typography align="left" style={{color:'orange', fontSize: 50}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login</Typography></h1>
        <Typography align="center" style={{paddingTop: "30px"}}></Typography>

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

        <h1>{loginStatus1}</h1>
        <h1>Name: {loginStatus2}</h1>
        <h1>Billing Address: {loginStatus3}</h1>
        <h1>Mailing Address: {loginStatus4}</h1>
        <h1>Payment Type: {loginStatus5}</h1>
        <h1>Diner ID: {loginStatus6}</h1>
        <h1>Total Points Earned: {loginStatus7}</h1>

    </div>

    );

}

export default Login