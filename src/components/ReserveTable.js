import React, { useEffect, useState, } from "react";

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

    const [reserves, setReserves] = useState(0);
    console.log(reserves);
    var user_id = 1;
    var firstName = "Nhi";
    var lastName = "Hoang";
    var phone = 123-456-7890;
    var email = "nhi@testing.com";
    var date = 2022-10-24;
    var time = 1430;
    var size = 2;

    /*
    o	User enters name, phone, email, date and time (date picker), and # of guests for dining and system presents available tables.
    o	Tables have maximum capacity limit i.e., 2, 4, 6, or 8.
    o	Different combinations are allowed, and owner accommodates the seating, for example: someone requests 8 guests and table for 8 is not available but 2 + 6, or 4+4 is available. 
    System should combine the tables and notify owner they need to combine tables. In this case System reserves both tables.
    */

    return(
    <div className='reserve'>
        <h1><Typography align="left" style={{color:'orange', fontSize: 50}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Make a Reservation</Typography></h1>
        <Typography align="center" style={{paddingTop: "30px"}}></Typography>
        <h4>&nbsp;Search for a Table</h4>
        <form>
            <div><Typography align="left" style={{paddingTop: "5px" }}>
                &nbsp;&nbsp; First Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               
                <input type = "String" style={{fontSize: 15}} />
            </Typography></div>

            <div><Typography align="left" style={{paddingTop: "10px" }}>
                &nbsp;&nbsp; Last Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type = "String" style={{fontSize: 15}} />
            </Typography></div>

            <div><Typography align="left" style={{paddingTop: "10px" }}>
                &nbsp; &nbsp;Phone Number &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type = "phone" style={{fontSize: 15}} />
            </Typography></div>

            <div><Typography align="left" style={{paddingTop: "10px" }}>
                &nbsp; &nbsp;Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type = "email" style={{fontSize: 15}} />
            </Typography></div>

            <div><Typography align="left" style={{paddingTop: "10px" }}>
                &nbsp; &nbsp;Reservation Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="date" style={{fontSize: 15}} ></input>
            </Typography></div> 

            <div><Typography align="left" style={{paddingTop: "10px" }}>
                &nbsp; &nbsp;Reservation Time &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="time" style={{fontSize: 15}}></input>
            </Typography></div>

            <div><Typography align="left" style={{paddingTop: "10px" }}>
                &nbsp; &nbsp;Party Size &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                <input type="number" style={{fontSize: 15}}></input>
            </Typography></div>
           
            <Typography align="center" style={{paddingTop: "20px" }}></Typography>
            &nbsp;<button type="submit">Check Availability</button>   
        </form>
        <form>
            <Typography align="center" style={{paddingTop: "30px" }}></Typography>
            <h4>&nbsp;Table Availability</h4>
            
            {
                <TableContainer
                    component={Paper}
                    style={{ width: 1000, paddingTop: "0px" }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" style={{backgroundColor: '#696773', color: 'white'}}>Table ID</TableCell>
                                <TableCell align="center" style={{backgroundColor: '#696773', color: 'white'}}>Table Name</TableCell>
                                <TableCell align="center" style={{backgroundColor: '#696773', color: 'white'}}>Capacity</TableCell>
                                <TableCell align="center" style={{backgroundColor: '#696773', color: 'white'}}>Status</TableCell>
                                <TableCell align="right" style={{backgroundColor: '#696773', color: 'white'}}>Reservation ID</TableCell>
                            </TableRow>
                        </TableHead>
                    <TableBody>
                        {
                            <TableRow>
                                <TableCell align = "left" component="th" scope="row">{"#" + "1"}</TableCell>
                                <TableCell align="center">{"T1"}</TableCell>
                                <TableCell align="center">{"2"}</TableCell>
                                <TableCell align="center">{"Available"}</TableCell>                                             
                                <TableCell align="right">{"#" + "1"}</TableCell>                                             
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            }

            { user_id === 0 ?
            <div style={{ padding: "100px" }}>
                        <>
                            {reserves.length > 0 ? (
                                <>
                                    <TableContainer
                                        component={Paper}
                                        style={{ width: 1000, paddingTop: "0px" }}>
                                        <Table aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="left" style={{backgroundColor: '#696773', color: 'white'}}>Table ID</TableCell>
                                                    <TableCell align="left" style={{backgroundColor: '#696773', color: 'white'}}>Table Name</TableCell>
                                                    <TableCell align="left" style={{backgroundColor: '#696773', color: 'white'}}>Capacity</TableCell>
                                                    <TableCell align="left" style={{backgroundColor: '#696773', color: 'white'}}>Status</TableCell>
                                                    <TableCell align="right" style={{backgroundColor: '#696773', color: 'white'}}>Reservation ID</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {reserves.map((reserve) => (
                                                    <TableRow key={reserve.table_id}>
                                                        <TableCell align="left" component="th" scope="row">{"#" + reserve.table_id + "1"}</TableCell>
                                                        <TableCell align="left">{reserve.table_name + "T1"}</TableCell>
                                                        <TableCell align="left">{reserve.capacity + "2"}</TableCell>
                                                        <TableCell align="left">{reserve.status + "Available"}</TableCell>                                             
                                                        <TableCell align="right">{"#" + reserve.reservation_id + "1"}</TableCell>                                             
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
        :(<Typography align="left" style={{ padding: "100px" }}>No Tables</Typography>)}
            
            &nbsp;<button type="submit"><Typography align="center">Reserve</Typography></button>
        </form>
    </div>
    )
    ;
}


export default ReserveTable 