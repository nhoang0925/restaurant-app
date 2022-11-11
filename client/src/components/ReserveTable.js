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


    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    /*
    const [capacity, setCapacity] = useState(0);
    useEffect(() => {
        axios({
            method: "GET",
            withCredentials: false,
        }).then((res) => {
            setCapacity(res.data.capacity);
            getSearch();
            getReserves();                            
        })
    }, [])
    */

    /*
    const [capacity, setCapacity] = useState(0);
    const getTable = () => {
        axios
            .get(`/api/getTable`, {
                params: {capacity : capacity}
            })
            .then((res) => {
                setCapacity(res.data);
            })
    }
    */



    const [reserves, setReserves] = useState(0);

    const getReserves = () => {
        axios
            .get(`/api/reserve`, {
                params: { capacity : capacity },
                withCredentials: false,
                //USE user_id state for id to query
            })
            .then((res) => {
                console.log(res);
                setReserves(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    //console.log(reserves);



    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [totalTables, setTotalTables] = useState([]);

    const [selection, setSelection] = useState({
      table: {
        name: null,
        id: null
      },
      date: new Date(),
      time: null,
      capacity: 0
    });
  
    const [reserving, setReserving] = useState({
      name: "",
      phone: "",
      email: ""
    });
  
    const [times] = useState([
      "11AM",
      "12PM",
      "1PM",
      "2PM",
      "3PM",
      "4PM",
      "5PM",
      "6PM",
      "7PM",
      "8PM",
      "9PM"
    ]);
  
    const [reservationError, setReservationError] = useState(false);
  
    const getDate = _ => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const date =
        months[selection.date.getMonth()] +
        " " +
        selection.date.getDate() +
        " " +
        selection.date.getFullYear();
      let time = selection.time.slice(0, -2);
      time = selection.time > 12 ? time + 12 + ":00" : time + ":00";
      console.log(time);
      const datetime = new Date(date + " " + time);
      return datetime;
    };


    /*
    o	User enters name, phone, email, date and time (date picker), and # of guests for dining and system presents available tables.
    o	Tables have maximum capacity limit i.e., 2, 4, 6, or 8.
    o	Different combinations are allowed, and owner accommodates the seating, for example: someone requests 8 guests and table for 8 is not available but 2 + 6, or 4+4 is available. 
    System should combine the tables and notify owner they need to combine tables. In this case System reserves both tables.
    */

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const url = 'http://localhost:5000'
    const [data, setData]= useState({
    capacity:""
    })


    /*
    const [capacity, setCapacity] = useState(0);
    const getCapacity = () => {
        axios
            .post(`/api/search`, {
                params: { capacity : capacity }
            })
            .then((res) => {
                //setCapacity(res.data.capacity);
                console.log(res);
                setCapacity(res.data);
                //if(res.data[res.data.length - 1].state==="Texas"){
                //    setIsInState(true);
                //}
            })
            .catch((err) => {
                console.log(err);
            });
    };

    console.log(capacity);
    */
    

    //const [capacity, setCapacity] = useState(0);
    var capacity;
    function handle(e){
        const newData = {...data}
        //newData[e.target.capacity] = e.target.value
        //newData['date'] = date
        //newData['time'] = time
        newData['capacity'] = e.target.capacity 
        newData['capacity'] = e.target.value   
        setData(newData)
        console.log(newData);
        capacity = e.target.value
        getSearch();
    }
    
    function submit(e){
        alert("Successfully Submitted");
        e.preventDefault();
        axios.post(url,{
            name: data.name,
            phone: data.phone,
            email: data.email,
            date: data.date,
            time: data.time
       })
        .then(res=>{
            console.log(res.data);
        })
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /*
    const [capacity, setCapacity] = useState(0);
    useEffect(() => {
        axios({
            method: "POST",
            url: "http://localhost:5000/api/search"
        }).then((res) => {
            console.log(res.data.capacity)
            if (res.data.capacity > 0) {
                setCapacity(res.data);
                //getSearch();
            }
        })
    }, [])
    */

    var status = "";
    const [searches, setSearches]= useState(0);
    const [isAvailable, setIsAvailable] = useState(0);
    const getSearch = () => {
        axios
            .get(`/api/getTable`, {
                params: { capacity : capacity }
            })
            .then((res) => {
                //setCapacity(res.data.capacity);
                console.log(res);
                setSearches(res.data);
                /*
                if(res.data[res.data.length - 1].isAvailable==="1"){
                    setIsAvailable(true);                   
                    if (setIsAvailable) {
                        status = "Available";
                    }
                }
                */
            })
            .catch((err) => {
                console.log(err);
            });
    };

    console.log(searches);







    ///////////////////////////////////////////////////////////////////////////////////////////////////



    return(
    <div>
        <h1><Typography align="left" style={{color:'red', fontSize: 50}}>Make a Reservation</Typography></h1>
        <Typography align="center" style={{paddingTop: "30px"}}></Typography>
        <h4>&nbsp;Search for a Table</h4>
        <form>
            <div><Typography align="left" style={{paddingTop: "5px" }}>
                Name &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;         
                <input type = "String" style={{fontSize: 15}} />
            </Typography></div>

            <div><Typography align="left" style={{paddingTop: "10px" }}>
                Phone Number &emsp;&ensp;
                <input type = "tel" style={{fontSize: 15}} />
            </Typography></div>

            <div><Typography align="left" style={{paddingTop: "10px" }}>
                Email &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
                <input type = "email" style={{fontSize: 15}} />
            </Typography></div>

            <div><Typography align="left" style={{paddingTop: "10px" }}>
                Reservation Date &ensp;
                <input type="date" id="date"></input>
            </Typography></div> 

            <div><Typography align="left" style={{paddingTop: "10px" }}>
                Reservation Time &nbsp;
                <select id="time" name="time">
                    <option value = "11AM">11AM</option>
                    <option value = "12PM">12PM</option>
                    <option value = "1PM">1PM</option>
                    <option value = "2PM">2PM</option>
                    <option value = "3PM">3PM</option>
                    <option value = "4PM">4PM</option>
                    <option value = "5PM">5PM</option>
                    <option value = "6PM">6PM</option>
                    <option value = "7PM">7PM</option>
                    <option value = "8PM">8PM</option>
                    <option value = "9PM">9PM</option>
                </select>
            </Typography></div>

            <div><Typography align="left" style={{paddingTop: "10px" }}>
                Party Size &emsp;&emsp;&emsp;&ensp;
                <select id="capacity" name="capacity" onChange={(e)=>handle(e)} value={data.capacity}>
                    <option value = "2">2</option>
                    <option value = "4">4</option>
                    <option value = "6">6</option>
                    <option value = "8">8</option>
                </select>              
            </Typography></div>
           
        </form>
        <form>
            <Typography align="center" style={{paddingTop: "30px" }}></Typography>
            <h4>&nbsp;Table Availability</h4>

            { 
            <div >
                        <>
                            {searches.length > 0 ? (
                                <>
                                    <TableContainer
                                        component={Paper}
                                        style={{ width: 1000, paddingTop: "0px" }}>
                                        <Table aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="left" style={{backgroundColor: '#696773', color: 'white'}}>Table ID</TableCell>
                                                    <TableCell align="left" style={{backgroundColor: '#696773', color: 'white'}}>Capacity</TableCell>
                                                    <TableCell align="left" style={{backgroundColor: '#696773', color: 'white'}}>isAvailable</TableCell>
                                                    <TableCell align="left" style={{backgroundColor: '#696773', color: 'white'}}>Status</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {searches.map((search) => (
                                                    <TableRow key={search.table_id}>
                                                        <TableCell align="left" component="th" scope="row">{"#" + search.table_id}</TableCell>
                                                        <TableCell align="left">{search.capacity}</TableCell>
                                                        <TableCell align="left">{search.isAvailable}</TableCell>
                                                        <TableCell align="left">{search.status}</TableCell>                                                                                       
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </>
                            ) : (
                                <></>
                            )
                            }
                        </>
            </div>
        }
            <Typography align="center" style={{paddingTop: "30px" }}></Typography>
            &nbsp;<button type="submit"><Typography align="center">Reserve</Typography></button>           
        </form>
    </div>
    )
    ;
}


export default ReserveTable