import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className="NavBar">
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/reserve'} ><li>Reserve Table</li></Link>
                <Link to={'/login'} ><li>Login</li></Link>
                <Link to={'/register'} ><li>Register</li></Link>
            </ul>
        </div>
    )
}

export default NavBar