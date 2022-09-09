import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <div>
            <ul>
                <Link to={'/'}><li>Home</li></Link>
            </ul>
        </div>
    )
}

export default NavBar