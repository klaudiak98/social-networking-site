import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from './Modal'

const Login = () => {
    let navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            "email": email,
            "password": password
        }

        await axios.post("http://localhost:5000/api/auth/signin", data)
        .then(
            res => {
                localStorage.setItem('accessToken',res.data.accessToken)
                navigate("/profile");
            }
        )
        .catch(
            err => {
                err.code === 'ERR_NETWORK'
                ?  new bootstrap.Modal(document.getElementById('networkError')).toggle()
                :  new bootstrap.Modal(document.getElementById('badCredential')).toggle()

                setPassword('')
            }
        )
    }

    return (
        <div className = 'container d-flex h-100 flex-column align-items-center justify-content-center'>
            <div className = 'row'>
                <div className="col">
                    <h2 className="row justify-content-center">Login</h2>
                    <div className="row justify-content-center w-70">
                        <form className = 'col-md-6' onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    aria-describedby="emailHelp" 
                                    value={email} 
                                    onChange={e => setEmail(e.target.value)}
                                    autoComplete="email"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    value={password} 
                                    onChange={e => setPassword(e.target.value)}
                                    autoComplete='password'/>
                            </div>
                            <button 
                                className="row btn btn-primary" 
                                type='submit'
                                disabled={!email.length || !password.length}>Login</button>
                        </form>
                    </div>
                    <div className="row justify-content-center">
                        <Link className='fit-content' to='/register'>Create new account</Link>
                    </div>
                </div>
            </div>   
            <Modal id='badCredential' title='Error' message='Bad credential!'/>
            <Modal id='networkError' title='Error' message='Network error! Try again later.'/>
        </div>     
    )
}

export default Login