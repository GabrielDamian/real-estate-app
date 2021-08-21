import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import './SignUp.css';
import Menu from '../../components/Home/home-sub-components/Menu/Menu';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const SignUp = ()=>{
    let history = useHistory();
    
    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        password: '',
        doublePassword: ''
    })
    
    const handleInputChange = (e)=>{
        setInputData((prev)=>{
            let newInput = {...prev};
            newInput[e.target.name] = e.target.value;
            return newInput;
        })
    }
    useEffect(()=>{
        console.log(inputData)
    },[inputData])

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputData.name.length == 0 || inputData.email.length == 0 || inputData.password.length == 0)
        {
            console.log("Empty input data!")
        }
        else
        {
            if(inputData.password != inputData.doublePassword)
            {
                console.log("passwords don't match!")
            }
            else
            {
                //vr sa trimitem la axios, fara double passwor
                let copyObj = inputData;
                delete copyObj.doublePassword

                axios.post('api/user/register',copyObj)
                .then(res=>{
                    console.log(res)
                    history.push('/dashboard');
                    
                })
                .catch(err=>console.log(err))
            }

        }
    }
    return(
        <div className="signup-container">
            <Menu showSignUp={false}/>

            <div className="sign-up-container-under-menu">
                <div className="sign-up-container-center-form">
                    <div className="sign-up-container-title">
                        <div className="sign-up-title-padding">
                            <span>Sign up</span>
                        </div>
                    </div>
                    <div className="sign-up-container-form-container">
                        <div className="sign-up-form-container-padding">
                            <form className="sign-up-form">
                                <label>
                                    <span>Name</span>
                                    <input type="text" name="name" onChange={handleInputChange}/>
                                </label>
                                <label>
                                    <span>Email</span>
                                    <input type="text" name="email" onChange={handleInputChange}/>
                                </label>
                                <label>
                                    <span>Password</span>
                                    <input type="password" name="password" onChange={handleInputChange}/>
                                </label>
                                <label>
                                    <span>Repeat Password</span>
                                    <input type="password" name="doublePassword" onChange={handleInputChange}/>
                                </label>
                                <label className="submit-btn-label">
                                    <button onClick={handleSubmit}>Sign up</button>
                                </label>
                                <label className="change-state-signin-signup">
                                    <p onClick={()=>{history.push('/login')}}>Already have an account? Sign in.</p>
                                </label>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default SignUp;