import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Login.css';
import Menu from '../../components/Home/home-sub-components/Menu/Menu';
import { useHistory } from "react-router-dom";

const Login = ()=>{
    let history = useHistory();
    const [formData, setFormData] = useState({
        email: '',
        password: ''

    });

    const handleInputChange= (e)=>{
        setFormData((prev)=>{
            let obj = {...prev};
            obj[e.target.name] = e.target.value;
            return obj
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(formData.email.length == 0 || formData.password.length == 0)
        {
            console.log("Empty email or password!")
        }
        else
        {
            axios.post('api/user/login',formData)
            .then((res)=>{
                console.log(res)
                localStorage.setItem('token',res.data)
                history.push('/dashboard')
                
            })
            .catch(err=>console.log(err))
        }
    }
    return(
        <div className="signup-container">
            <Menu showSignUp={false}/>

            <div className="sign-up-container-under-menu">
                <div className="sign-up-container-center-form">
                    <div className="sign-up-container-title">
                        <div className="sign-up-title-padding">
                            <span>Login</span>
                        </div>
                    </div>
                    <div className="sign-up-container-form-container">
                        <div className="sign-up-form-container-padding">
                            <form className="sign-up-form">
                                <label>
                                    <span>Email</span>
                                    <input type="text" name="email" onChange={handleInputChange}/>
                                </label>
                                <label>
                                    <span>Password</span>
                                    <input type="password" name="password" onChange={handleInputChange}/>
                                </label>

                                <label className="submit-btn-label">
                                    <button onClick={handleSubmit}>Log in</button>
                                </label>
                                <label className="change-state-signin-signup">
                                    <p onClick={()=>{history.push('/signup')}}>Don't have an account? Sign up.</p>
                                </label>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;
