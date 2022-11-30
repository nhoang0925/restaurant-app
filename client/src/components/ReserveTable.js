import React, { useEffect, useState, } from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom";

import {
    Typography,
    Paper,
} from "@mui/material";

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
        additionalTable:"" 
    })

    
    var date;
    var time;
    var size;

    const [searches, setSearches]= useState(0);
    const getSearch = () => {
        axios
            .get(`/api/getTable`, {
                params: { date : date , time : time , size : size }
            })
            .then((res) => { 
                if (res.data.length == 0) {                   
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
            additionalTable: data.additionalTable
       })
        .then(res=>{
            console.log(res.data);
        })
    };


    return(
    <div>
        <h1><Typography align="left" style={{color:'red', fontSize: 50}}>Make a Reservation</Typography></h1>
        <Typography align="center" style={{paddingTop: "30px"}}></Typography>
        <h4>&nbsp;&emsp;&emsp;Search for a Table</h4>
        <form onSubmit={(e)=> submit(e)}>

            <div><Typography align="left" style={{paddingTop: "5px" }}>
            &emsp;Name &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;         
                <input type = "String" style={{fontSize: 15}} onChange={(e)=>handle(e)} id="name" value={data.name}/>
            </Typography></div>

            <div><Typography align="left" style={{paddingTop: "10px" }}>
            &emsp;Phone Number &emsp;&ensp;
                <input type = "tel" style={{fontSize: 15}} onChange={(e)=>handle(e)} id="phone" value={data.phone}/>
            </Typography></div>

            <div><Typography align="left" style={{paddingTop: "10px" }}>
            &emsp;Email &emsp;&emsp;&emsp;&emsp;&ensp;&emsp;
                <input type = "email" style={{fontSize: 15}} onChange={(e)=>handle(e)} id="email" value={data.email}/>
            </Typography></div>

            <div><Typography align="left" style={{paddingTop: "10px" }}>
            &emsp;Reservation Date &ensp;
                <input type="date" id="date" name="date" onChange={(e)=>changeHandle(e)} value={data.date}></input>
            </Typography></div> 

            <div><Typography align="left" style={{paddingTop: "10px" }}>
            &emsp;Reservation Time &nbsp;
                <select id="time" name="time" onChange={(e)=>changeHandle(e)} value={data.time}>
                    <option value = ""></option>
                    <option value = "110000">11AM</option>
                    <option value = "120000">12PM</option>
                    <option value = "130000">1PM</option>
                    <option value = "140000">2PM</option>
                    <option value = "150000">3PM</option>
                    <option value = "160000">4PM</option>
                    <option value = "170000">5PM</option>
                    <option value = "180000">6PM</option>
                    <option value = "190000">7PM</option>
                    <option value = "200000">8PM</option>
                    <option value = "210000">9PM</option>
                </select>
            </Typography></div>

            <div><Typography align="left" style={{paddingTop: "10px" }}>
            &emsp;Party Size &emsp;&emsp;&emsp;&ensp;
                <select id="size" name="size" onChange={(e)=>changeHandle(e)} value={data.size}>
                    <option value = ""></option>
                    <option value = "2">2</option>
                    <option value = "4">4</option>
                    <option value = "6">6</option>
                    <option value = "8">8</option>
                </select>              
            </Typography></div>
           
        </form>
        <form>
            <Typography align="center" style={{paddingTop: "30px" }}></Typography>
            <h4>&nbsp;&emsp;Table Availability</h4>

            { 
            <div >
                        <>
                            {searches.length > 0 ? (
                                <><><><>
                                    <TableContainer
                                        component={Paper}
                                        style={{ width: 400, paddingTop: "0px", paddingLeft: "5px" }}>
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
                                    </TableContainer>
                                </><div><Typography align="left" style={{ paddingTop: "5px" }}>
                                    &emsp; Book Table &emsp; &emsp; &emsp; &emsp; &emsp; &ensp;
                                    <select id="table" name="table" style={{ fontSize: 15 }} onChange={(e) => handle(e)} value={data.table}>
                                        <option value=""></option>
                                        {searches.map(search => (
                                            <option key={search.table_id} value={search.table_id}>
                                                {"#" + search.table_id}
                                            </option>
                                        ))}
                                    </select>
                                </Typography></div></><div><Typography align="left" style={{ paddingTop: "5px" }}>
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
        <form onSubmit={(e)=> submit(e)}>
            <Typography align="center" style={{paddingTop: "30px" }}></Typography>
            &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<button type="submit"><Typography align="center">Reserve</Typography></button>   
        </form>
    </div>
    )
    ;
}


export default ReserveTable