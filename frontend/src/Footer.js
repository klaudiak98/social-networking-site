const Footer = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom p-2">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">[Website name]</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href = 'https://github.com/klaudiak98'>&copy;2021, Klaudia Kieryk</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">klaudiakieryk123@gmail.com</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Footer