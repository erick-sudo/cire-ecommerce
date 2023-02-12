import React, {useState} from 'react';
import "./Account.css"
import fingerprint from "./fingerprint-pana.svg"
import signup from "./signup.png"

function Login() {

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <div className="login-wrapper">
            <div className='login-page'>
                <div className='login-image'>
                    <h1>Sign In</h1>
                    <img src={fingerprint} alt='Login' />
                </div>
                <div className='login-form-div'>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <div className='input-fields'>
                            <input type="text" placeholder='Username' />
                            <input type="password" placeholder='Password' />
                        </div>
                        <a href='/signup'>Create account</a>
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    )
}

function Signup() {

    const [formData, setFormData] = useState({
        username: "",
        firstname: "",
        lastname: "",
        emailaddress: "",
        phonenumber: "",
        password: "",
        confirmpassword: ""
    })

    function handleSubmit(event) {
        event.preventDefault()

        const validatedFormData = {...formData}
        delete validatedFormData.confirmpassword

        fetch("http://localhost:8000/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(validatedFormData)
        })
        .then(res => res.json())
        .then(data => {
            setFormData({
                username: "",
                firstname: "",
                lastname: "",
                emailaddress: "",
                phonenumber: 7,
                password: "",
                confirmpassword: ""
            })
        })

    }

    function handleChange(event) {
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    return (
        <div className="login-wrapper">
            <div className='login-page'>
                <div className='signup-image'>
                    <h1>Register</h1>
                    <img src={signup} alt='Login' />
                </div>
                <div className='login-form-div'>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <div className='input-fields'>
                            <input className={formData.username.length>4 ? "valid" : "invalid"} name='username' value={formData.username} onChange={handleChange} type="text" placeholder='Username' required autoComplete='true' />
                            <input className={formData.firstname.length>3 ? "valid" : "invalid"} name='firstname' value={formData.firstname} onChange={handleChange} type="text" placeholder='Firstname' required/>
                            <input className={formData.lastname.length>3 ? "valid" : "invalid"} name='lastname' value={formData.lastname} onChange={handleChange} type="text" placeholder='Lastname' required />
                            <input className={formData.emailaddress.includes("@") ? "valid" : "invalid"} name='emailaddress' value={formData.emailaddress} onChange={handleChange} type="email" placeholder='Email' required />
                            <input className={formData.phonenumber.length<9 ? "invalid" : "valid"} name='phonenumber' value={formData.phonenumber} onChange={handleChange} type="number" placeholder='Phonenumber' required/>
                            <input className={formData.password.length>8 ? "valid" : "invalid"} name='password' value={formData.password} onChange={handleChange} type="password" placeholder='Password' required autoComplete="cc-csc" />
                            <input className={formData.confirmpassword.length>8 ? "valid" : "invalid"} name='confirmpassword' value={formData.confirmpassword} onChange={handleChange} type="password" placeholder='Confirm Password' required autoComplete="cc-csc" />
                        </div>
                        <a href='/login'>Already have an account? Login</a>
                        <input type="submit" value="Signup" />
                    </form>
                </div>
            </div>
        </div>
    )
}


export { Login, Signup}
