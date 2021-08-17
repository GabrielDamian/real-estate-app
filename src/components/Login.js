import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Login = ()=>{
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
                
            })
            .catch(err=>console.log(err))
        }
    }
    return(
        <div className="login-container">
            <form>
                <label>
                    <span>Email</span>
                    <input type="text" value={formData.email} name="email" onChange={handleInputChange}/>
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" value={formData.password} name="password" onChange={handleInputChange}/>
                </label>
                <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}
export default Login;
