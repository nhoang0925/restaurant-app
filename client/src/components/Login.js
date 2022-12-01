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
        <div className='register'>
            <div id="header1">Please Sign in to Continue</div>
            <Typography align="center" style={{ paddingTop: "30px" }}></Typography>

            <form id = "field1" onSubmit={(e) => submit(e)}>
                <div>
                    <pre>Username   <input type="String" style={{ fontSize: 15 }} onChange={(e) => handle(e)} id="login_username" value={data.login_username} /></pre>
                </div>
                
                <div>
                    <pre>Password   <input type="String" style={{ fontSize: 15 }} onChange={(e) => handle(e)} id="login_password" value={data.login_password} /></pre>
                </div>

                <button type="submit">Login</button>
            </form>
            <Typography align="center" style={{ paddingTop: "30px" }}></Typography>

            <p id="field1">
                {loginStatus1}
                {<br />}
                Name: {loginStatus2}
                {<br />}
                Billing Address: {loginStatus3}
                {<br />}
                Mailing Address: {loginStatus4}
                {<br />}
                Payment Type: {loginStatus5}
                {<br />}
                Diner ID: {loginStatus6}
                {<br />}
                Total Points Earned: {loginStatus7}                
            </p>
        </div>
    );
}

export default Login