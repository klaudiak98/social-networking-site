import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Register = () => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [repasswordCorrect, setRepasswordCorrect] = useState(false)
    const [emailAvailability, setEmailAvailability] = useState(false)
    const [usernameAvailability, setUsernameAvailability] = useState(false)

    useEffect(() => {

        axios.get('http://localhost:5000/api/user/checkEmailAvailability?email='+email)
        .then(
            res => {
                setEmailAvailability(res.data.available) 
            }
        )
        .catch(
            err => console.log(err)
        )
    }, [email]);

    useEffect(() => {

        axios.get('http://localhost:5000/api/user/checkUsernameAvailability?username='+username)
        .then(
            res => {
                setUsernameAvailability(res.data.available) 
            }
        )
        .catch(
            err => console.log(err)
        )   

    }, [username])

    useEffect(() => {

        password === repassword ? setRepasswordCorrect(true) : setRepasswordCorrect(false)

    },[password, repassword])

    const handleClick = (e) => {
        e.preventDefault();
        
        

        // if user not exist
        // if password and re-pass is ok

        (emailAvailability && usernameAvailability && repasswordCorrect) ?

       
        axios.post("http://localhost:5000/api/auth/signup", {
                "name": name,
                "username": username,
                "email": email,
                "password": password
            })
        .then(
            res => {
                alert('register ok')
                // go to login page
            }
        )
        .catch(
            err => console.log(err)
        ) :

        alert(`cannot register - wrong data; email: ${emailAvailability}, username: ${usernameAvailability}, password: ${repasswordCorrect}`);

    }

    return (
        <div className = 'container d-flex h-100 flex-column align-items-center justify-content-center'>
            <div className = 'row'>
                <div className="col">
                    <h2 className="row justify-content-center">Create new account</h2>
                    <div className="row justify-content-center">
                        <form className = 'col-md-6' onSubmit={handleClick}>

                            <div className="row mb-3">
                                <label htmlFor="name" className="form-label">Your name</label>
                                <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)}/>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" value={username} onChange={e => setUsername(e.target.value)}/>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)}/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)} aria-describedby="passwordHelp"/>
                                <div id="passwordHelp" className="form-text">Password 6-20 char</div>
                            </div>
                            
                            <div className="row mb-3">
                                <label htmlFor="re-password" className="form-label">Repeat password</label>
                                <input type="password" className="form-control" id="re-password" value={repassword} onChange={e => setRepassword(e.target.value)}/>
                            </div>
                            
                            <button className="row btn btn-primary" type='submit'>Register</button>

                        </form>
                    </div>
                    <Link className="row justify-content-center" to='/login'>Login</Link>
                </div>
                
            </div>
        </div>
    )
}

export default Register