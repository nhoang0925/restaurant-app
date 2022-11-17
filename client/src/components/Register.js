import React, { useEffect, useState, } from "react";

import {
    Typography,
} from "@mui/material";

const Register = () => {

        const [data, setData] = useState({
        name:"",
        phone:"",
        email:"",
        date: "",
        time: "",
        size: "",
        table:"",
        additionalTable:"" 
        })


    return(
    <div className = 'register'>
        <h1><Typography align="left" style={{color:'orange', fontSize: 50}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register</Typography></h1>
        <Typography align="center" style={{paddingTop: "30px"}}></Typography>
        <h4>&nbsp;Enter Registration Information</h4>

        <form>
        <div><Typography align="left" style={{paddingTop: "5px" }}>
                &nbsp;&nbsp; User &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            
                <input type = "String" style={{fontSize: 15}} />
        </Typography></div>

        <div><Typography align="left" style={{paddingTop: "5px" }}>
                &nbsp;&nbsp; Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               
                <input type = "String" style={{fontSize: 15}} />
        </Typography></div>

        <div><Typography align="left" style={{paddingTop: "5px" }}>
                &nbsp;&nbsp; Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               
                <input type = "String" style={{fontSize: 15}} />
        </Typography></div>

        <div><Typography align="left" style={{paddingTop: "5px" }}>
                &nbsp;&nbsp; Billing Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               
                <input type = "String" style={{fontSize: 15}} />
        </Typography></div>

        <div><Typography align="left" style={{paddingTop: "5px" }}>
                &nbsp;&nbsp; Mailing Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               
                <input type = "String" style={{fontSize: 15}} />
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

export default Register