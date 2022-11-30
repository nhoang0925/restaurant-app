import React, { useEffect, useState, } from "react";
import axios from 'axios'

import {
    Typography,
} from "@mui/material";

const Register = () => {

        const url = 'http://localhost:3000/api/register'

        const [data, setData] = useState({
        username:"",
        password:"",
        email_r:"",
        billing_address: "",
        mailing_address: "",
        })


        function handle(e){
                const newData = {...data}
                newData[e.target.id] = e.target.value
                setData(newData)
                console.log(newData)
        }

        function submit(e){
                console.log("ree");
                alert("Successfully Registered");
                e.preventDefault();
                axios.post(url,{
                        username: data.username,
                    password: data.password,
                    email_r: data.email_r,
                    billing_address: data.billing_address,
                    mailing_address: data.mailing_address
               })
                .then(res=>{
                    console.log(res.data);
                })
            };

    return(
    <div className = 'register'>
        <h1><Typography align="left" style={{color:'orange', fontSize: 50}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register</Typography></h1>
        <Typography align="center" style={{paddingTop: "30px"}}></Typography>
        <h4>&nbsp;Enter Registration Information</h4>

        <form onSubmit={(e)=> submit(e)}>
        <div><Typography align="left" style={{paddingTop: "5px" }}>
                &nbsp;&nbsp; Username &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            
                <input type = "String" style={{fontSize: 15}} onChange={(e)=>handle(e)} id="username" value={data.username} />
        </Typography></div>

        <div><Typography align="left" style={{paddingTop: "5px" }}>
                &nbsp;&nbsp; Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               
                <input type = "String" style={{fontSize: 15}} onChange={(e)=>handle(e)} id="password" value={data.password} />
        </Typography></div>

        <div><Typography align="left" style={{paddingTop: "5px" }}>
                &nbsp;&nbsp; Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               
                <input type = "String" style={{fontSize: 15}} onChange={(e)=>handle(e)} id="email_r" value={data.email_r} />
        </Typography></div>

        <div><Typography align="left" style={{paddingTop: "5px" }}>
                &nbsp;&nbsp; Billing Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               
                <input type = "String" style={{fontSize: 15}} onChange={(e)=>handle(e)} id="billing_address" value={data.billing_address} />
        </Typography></div>

        <div><Typography align="left" style={{paddingTop: "5px" }}>
                &nbsp;&nbsp; Mailing Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               
                <input type = "String" style={{fontSize: 15}} onChange={(e)=>handle(e)} id="mailing_address" value={data.mailing_address} />
        </Typography></div>

        <Typography align="center" style={{paddingTop: "20px" }}></Typography>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="submit"><Typography align="center">Register</Typography></button>

        </form>


    </div>

    );

}

export default Register