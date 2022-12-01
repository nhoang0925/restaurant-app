import React, { useEffect, useState, } from "react";
import axios from 'axios'
import {Typography} from "@mui/material";

const Register = () =>
{
    const url = 'http://localhost:3000/api/register'
    const [data, setData] = useState(
        {
            username: "",
            password: "",
            name_r: "",
            billing_address: "",
            mailing_address: "",
            payment_r: "",
        })

    function handle(e)
    {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    function submit(e)
    {
        console.log("ree");
        alert("Successfully Registered");
        e.preventDefault();

        axios.post(url,
            {
                username: data.username,
                password: data.password,
                name_r: data.name_r,
                billing_address: data.billing_address,
                mailing_address: data.mailing_address,
                payment_r: data.payment_r
            })
            .then(res=>{console.log(res.data);})
    };

    return(
        <div className='register'>
            <div id ="header1">Register</div>
            <Typography align="center" style={{ paddingTop: "30px" }}></Typography>

            <form id="field1" onSubmit={(e) => submit(e)}>

                <div>
                    <pre>Username        <input type="String" style={{ fontSize: 15 }} onChange={(e) => handle(e)} id="username" value={data.username} /></pre>
                </div>
                
                <div>
                    <pre>Password        <input type="String" style={{ fontSize: 15 }} onChange={(e) => handle(e)} id="password" value={data.password} /></pre>
                </div>
                
                <div>
                    <pre>Name            <input type="String" style={{ fontSize: 15 }} onChange={(e) => handle(e)} id="name_r" value={data.name_r} /></pre>
                </div>
                
                <div>
                    <pre>Billing Address <input type="String" style={{ fontSize: 15 }} onChange={(e) => handle(e)} id="billing_address" value={data.billing_address} /></pre>
                </div>
                
                <div>
                    <pre>Mailing Address <input type="String" style={{ fontSize: 15 }} onChange={(e) => handle(e)} id="mailing_address" value={data.mailing_address} /></pre>
                </div>
                
                <div>
                    <pre>Payment Preference         <select id="payment_r" name="payment_r" onChange={(e) => handle(e)} value={data.payment_r}>
                            <option value = ""></option>
                            <option value="cash">Cash</option>
                            <option value="credit">Credit</option>
                            <option value="check">Check</option>
                    </select>
                    </pre>
                </div>
                               
                <button type="submit"><Typography align="center">Register</Typography></button>
            </form>
        </div>
    );
}

export default Register;