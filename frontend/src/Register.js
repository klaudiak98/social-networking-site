const Register = () => {
    return (
        <div className = 'container d-flex h-100 flex-column align-items-center justify-content-center'>
            <div className = 'row'>
                <div className="col">
                    <h2 className="row justify-content-center">Create new account</h2>
                    <div className="row justify-content-center">
                        <form className = 'col-md-6'>
                            <div className="row mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="row mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="row mb-3">
                                <label for="exampleInputPassword1" className="form-label">Repeat password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                        <button type="submit" className="row btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Register