import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { Typography, Paper, } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";


const ReserveTable = () => {

    const url = 'http://localhost:5000/api/reserve'
    const [data, setData] = useState({
        name:"",
        phone:"",
        email:"",
        date: "",
        time: "",
        size: "",
        table:"",
        additionalTable:"",
        cardName:"",
        cardNumber:"",
        cardExpiration:"",
        cardCvv:""
    })

    const [formValid, setFormValid] = useState(0);
  
    var date;
    var time;
    var size;

    function isWeekend(date) {
        var convertDate = new Date(date);
        return convertDate.getDay() === 5 || convertDate.getDay() === 6;
    }

    function isHoliday(date) {
        const holidays = new Set(["2022-12-24", "2022-12-25", "2022-12-31", 
        "2023-01-01", "2023-01-16", "2023-05-29", "2023-06-19", "2023-07-04", "2023-09-04", "2023-10-09", "2023-11-10", "2023-11-23", "2023-12-24", "2023-12-25", "2023-12-31",
        "2023-02-14", "2023-02-21", "2023-03-17", "2023-04-09", "2023-05-05", "2023-05-14", "2023-06-18"]);
        return holidays.has(date);
    }   

    const [searches, setSearches]= useState(0); 
    const getSearch = () => {
        axios
            .get(`/api/getTable`, {
                params: { date : date , time : time , size : size }
            })
            .then((res) => { 
                if (res.data.length === 0) {                   
                    axios
                        .get(`/api/getTableSmaller`, {
                            params: { date : date , time : time , size : size }
                        })
                        .then((res) => {
                            if (res.data.length > 0) {
                                alert("Table for requested party size is not available. Please reserve two smaller tables instead.");
                            }
                            console.log(res);
                            setSearches(res.data);
                        })                      
                }
                console.log(res);
                setSearches(res.data);                  
            })
            .catch((err) => {
                console.log(err);
            });
    };

    console.log(searches);

    function changeHandle(e) {
        const searchData = {...data}
        searchData[e.target.id] = e.target.value
        setData(searchData)

        date = searchData.date
        time = searchData.time
        size = searchData.size

        getSearch();    
    }

    function handle(e){

        const newData = {...data}
        newData[e.target.id] = e.target.value

        if (newData.name !== "") {
            if (newData.phone.match(/^\d+$/)) {
                if (newData.phone.length === 10) {
                    if (newData.table !== "") {
                        if (newData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                            setFormValid(true);
                        }
                    }
                }
            }
        }
        
        setData(newData)
        console.log(newData)               
    }        

    function submit(e){
        alert("Successfully Reserved");  
        e.preventDefault();
        axios.post(url,{
            name: data.name,
            phone: data.phone,
            email: data.email,
            date: data.date,
            time: data.time,
            size: data.size,
            table: data.table,
            additionalTable: data.additionalTable,
            cardName: data.cardName,
            cardNumber: data.cardNumber,
            cardExpiration: data.cardExpiration,
            cardCvv: data.cardCvv
       })
        .then(res=>{
            console.log(res.data);            
        })
    };

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/register`; 
        navigate(path);
    };

    return (
        <div>
            <h1 id="header1">Make a Reservation</h1>

            <Typography align="center" style={{ paddingTop: "30px" }}></Typography>

            <h4 id="header4">Search for a Table</h4>

            <Typography align="center" style={{ paddingTop: "30px" }}></Typography>

            <form id="field1" onSubmit={(e) => submit(e)}>
                <div>
                    <pre>Name                <input type="String" style={{ fontSize: 15 }} onChange={(e) => handle(e)} id="name" value={data.name} required placeholder="Your name" /></pre>
                </div>

                <div>
                    <pre>Phone Number        <input type="tel" style={{ fontSize: 15 }} onChange={(e) => handle(e)} id="phone" value={data.phone} required placeholder="10-digit phone #" /></pre>
                </div>

                <div>
                    <pre>Email               <input type="email" style={{ fontSize: 15 }} onChange={(e) => handle(e)} id="email" value={data.email} required placeholder="email@cougar.com" /></pre>
                </div>

                <div>
                    <pre>Reservation Date    <input type="date" id="date" name="date" onChange={(e)=>changeHandle(e)} value={data.date} min={new Date().toISOString().split('T')[0]} ></input></pre>
                </div> 

                <div>
                    <pre>Reservation Time                 <select id="time" name="time" onChange={(e) => changeHandle(e)} value={data.time}>
                        <option value=""></option>
                        <option value="110000">11AM</option>
                        <option value="120000">12PM</option>
                        <option value="130000">1PM</option>
                        <option value="140000">2PM</option>
                        <option value="150000">3PM</option>
                        <option value="160000">4PM</option>
                        <option value="170000">5PM</option>
                        <option value="180000">6PM</option>
                        <option value="190000">7PM</option>
                        <option value="200000">8PM</option>
                        <option value="210000">9PM</option>
                    </select></pre>
                </div>

                <div>
                    <pre>Party Size                          <select id="size" name="size" onChange={(e) => changeHandle(e)} value={data.size}>
                        <option value=""></option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                    </select></pre>
                </div>           
            </form>

            <form>
                <Typography align="center" style={{ paddingTop: "30px" }}></Typography>
                { 
                    <div >
                        <>
                            {isWeekend(data.date) || isHoliday(data.date) ? (
                                <><><><><><>
                                <div id="alert">A hold fee will be charged for reservations made on weekends and holidays.</div>
                                <div id="alert">A minimum of $10 will be charged for no-show.</div>
                            </><div id="field"><Typography align="left" style={{ paddingTop: "5px" }}>
                                &emsp; Name on Card &emsp;&emsp; 
                                <input type="String" style={{ fontSize: 15 }} onChange={(e) => handle(e)} id="cardName" value={data.cardName} placeholder="Enter Name on Card"/>
                            </Typography></div></><div id="field"><Typography align="left" style={{ paddingTop: "5px" }}>
                                &emsp; Card Number &emsp; &ensp; &ensp;
                                <input type="String" style={{ fontSize: 15 }} onChange={(e) => handle(e)} id="cardNumber" value={data.cardNumber} placeholder="Enter 16-digit CC Number"/>
                            </Typography></div></><div></div></><div><div id="field"><Typography align="left" style={{ paddingTop: "5px" }}>
                                &emsp; Expiration &emsp; &emsp; &ensp;&ensp;&ensp;
                                <input type="String" style={{ fontSize: 15 }} onChange={(e) => handle(e)} id="cardExpiration" value={data.cardExpiration} placeholder="Enter 4-digit MMYY"/>
                            </Typography></div></div></><div><div id="field"><Typography align="left" style={{ paddingTop: "5px" }}>
                                &emsp; CVV &emsp; &emsp; &emsp; &emsp; &ensp; &ensp;&thinsp;
                                <input type="String" style={{ fontSize: 15 }} onChange={(e) => handle(e)} id="cardCvv" value={data.cardCvv} placeholder="Enter 3-digit CVV"/>
                            </Typography></div></div></>
                            ) : (
                                <></>
                            )}                           
                        </>
                    </div>
                }
               
                <h4 id="header4">Table Availability</h4>
                { 
                    <div >
                        <>
                            {searches.length > 0 ? (                               
                                <><><><>

                                <div id="alert2">Register an account to earn points when dining with us!</div>
                                <form onClick={routeChange}>
                                    <div id = "field">
                                        <Typography style={{paddingTop: "50px" }}></Typography>
                                        <button type="submit" ><Typography align="center">Register</Typography></button>  
                                    </div> 
                                </form>
                                    <div id="field">
                                    <TableContainer
                                        component={Paper}
                                        style={{width: 400, paddingTop: "5px"}}>
                                        <Table aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center" style={{ backgroundColor: '#696773', color: 'white' }}>Table Number</TableCell>
                                                    <TableCell align="center" style={{ backgroundColor: '#696773', color: 'white' }}>Capacity</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {searches.map((search) => (
                                                    <TableRow key={search.table_id}>
                                                        <TableCell align="center" component="th" scope="row">{"#" + search.table_id}</TableCell>
                                                        <TableCell align="center">{search.capacity}</TableCell>

                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer></div>
                                </><div id="field"><Typography align="left" style={{ paddingTop: "10px" }}>
                                    &emsp; Book Table &emsp; &emsp; &emsp; &emsp; &emsp; &ensp;
                                    <select id="table" name="table" style={{ fontSize: 15 }} onChange={(e) => handle(e)} value={data.table} required>
                                        <option value=""></option>
                                        {searches.map(search => (
                                            <option key={search.table_id} value={search.table_id}>
                                                {"#" + search.table_id}
                                            </option>
                                        ))}
                                    </select>
                                </Typography></div></><div id="field"><Typography align="left" style={{ paddingTop: "5px" }}>
                                    &emsp; Add Second Table &emsp; &emsp; &ensp; &ensp;
                                    <select id="additionalTable" name="additionalTable" style={{ fontSize: 15 }} onChange={(e) => handle(e)} value={data.additionalTable}>
                                        <option value=""></option>
                                        {searches.map(search => (
                                            <option key={search.table_id} value={search.table_id}>
                                                {"#" + search.table_id}
                                            </option>
                                        ))}
                                    </select>
                                </Typography></div></><div></div></>
                            ) : (
                                <></>
                            )}                           
                        </>
                    </div>
                }
            </form>

            <Typography align="center" style={{ paddingTop: "20px" }}></Typography>

            <form onSubmit={(e) => submit(e)}>
                <div id="field1">
                    <button type="submit" disabled={!formValid}><Typography align="center">Reserve</Typography></button>
                </div>
            </form>
        </div>
    );
}

export default ReserveTable