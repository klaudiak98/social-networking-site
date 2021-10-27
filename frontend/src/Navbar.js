const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark p-4">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="/">[Website name]</a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/">Add new post</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/">Friends</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/">Messeges</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/">Settings</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>

    )
}

export default Navbar