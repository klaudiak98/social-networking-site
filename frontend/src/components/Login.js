import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [usernameOrEmail, setUsernameOrEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = (e) => {
        e.preventDefault();

        const data = {
            "usernameOrEmail": usernameOrEmail,
            "password": password
        }

        axios.post("http://localhost:5000/api/auth/signin", data)
        .then(
            res => {
                localStorage.setItem('accessToken',res.data.accessToken)
                window.open('profile',"_self")
            }
        )
        .catch(
            err => {
                alert('bad credential - try again!')
                setPassword('')
                console.log(err)
            }
        )

    }

    return (
        <div className = 'container d-flex h-100 flex-column align-items-center justify-content-center'>
            <div className = 'row'>
                <div className="col">
                    <h2 className="row justify-content-center">Login</h2>
                    <div className="row justify-content-center">
                        <form className = 'col-md-6' onSubmit={handleClick}>
                            <div className="row mb-3">
                                <label htmlFor="usernameOrEmail" className="form-label">Username or email</label>
                                <input type="text" className="form-control" id="usernameOrEmail" aria-describedby="usernameOrEmailHelp" value={usernameOrEmail} onChange={e => setUsernameOrEmail(e.target.value)}/>
                                <div id="usernameOrEmailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <button className="row btn btn-primary" type='submit'>Login</button>
                        </form>
                    </div>
                    <Link className="row justify-content-center" to='/register'>Create new account</Link>
                </div>
            </div>   
        </div>     
    )
}

export default Login