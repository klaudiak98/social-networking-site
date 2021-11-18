import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark p-4">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="/profile">[Website name]</Link> 
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/profile">Profile</Link> 
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/postForm">Add new post</Link> 
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/friends">Friends</Link> 
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/messages">Messages</Link> 
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/settings">Settings</Link> 
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-outline-light" onClick={() => {localStorage.clear(); window.open('/login','_self')}}>Logout</button>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>

    )
}

export default Navbar