import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import Modal from './Modal'

const Register = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [emailAvailability, setEmailAvailability] = useState(false)
    const passwordCorrect = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    const samePasswords = password === repassword;

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.get('http://localhost:5000/api/user/checkEmailAvailability?email='+email)
        .then(res => {setEmailAvailability(res.data.available)})
        .catch(err => {setEmailAvailability(false)});

        (emailAvailability && passwordCorrect && samePasswords)
        ? await axios.post("http://localhost:5000/api/auth/signup", {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password
        })
        .then(
            res => {
                new bootstrap.Modal(document.getElementById('newAccount')).toggle()
            }
        )
        .catch(
            err => {
                err.code === 'ERR_NETWORK'
                ?  new bootstrap.Modal(document.getElementById('networkError')).toggle()
                :  new bootstrap.Modal(document.getElementById('otherError')).toggle()
            }
        )
        : new bootstrap.Modal(document.getElementById('otherError')).toggle()
    }

    return (
        <div className = 'container d-flex h-100 flex-column align-items-center justify-content-center'>
            <div className = 'row'>
                <div className="col">
                    <h2 className="row justify-content-center">Create new account</h2>
                    <div className="row justify-content-center w-70">
                        <form className = 'col-md-6' onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <label htmlFor="firstName" className="form-label">Your first name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="firstName" 
                                    value={firstName} 
                                    onChange={e => setFirstName(e.target.value)}/>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="lastName" className="form-label">Your last name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="lastName" 
                                    value={lastName} 
                                    onChange={e => setLastName(e.target.value)}/>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
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
                                    onChange={e => setPassword(e.target.value)} aria-describedby="passwordHelp" 
                                    autoComplete="new-password"/>
                                <div id="passwordHelp" className="form-text">Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="re-password" className="form-label">Repeat password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="re-password"
                                    value={repassword} 
                                    onChange={e => setRepassword(e.target.value)}
                                    autoComplete="new-password"/>
                            </div>
                            <button 
                                className="row btn btn-primary" 
                                type='submit'
                                disabled={!firstName.length || !lastName.length || !email.length || !password.length || !passwordCorrect || !samePasswords}>Register</button>
                        </form>
                    </div>
                    <div className="row justify-content-center">
                        <Link className='fit-content' to='/login'>Login</Link>
                    </div>
                </div>
            </div>
            <Modal id='newAccount' title='Congratulations!' message='New account has been created!'/>
            <Modal id='networkError' title='Error' message='Network error! Try again later.'/>
            <Modal id='otherError' title='Error' message='Something went wrong.'/>
        </div>
    )
}

export default Register