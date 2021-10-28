const Login = () => {
    return (
        <div className = 'container d-flex h-100 flex-column align-items-center justify-content-center'>
            <div className = 'row'>
                <div className="col">
                    <h2 className="row justify-content-center">Login</h2>
                    <div className="row justify-content-center">
                        <form className = 'col-md-6'>
                            <div className="row mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="row mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password"/>
                            </div>
                            <button type="submit" className="row btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>   
        </div>     
        
    )
}

export default Login