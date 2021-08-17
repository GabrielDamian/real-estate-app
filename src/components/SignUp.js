import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const SignUp = ()=>{
    let history = useHistory();

    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        password: ''
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
            axios.post('api/user/register',inputData)
            .then(res=>{
                console.log(res)
                //history.push('/');
                
            })
            .catch(err=>console.log(err))
        }
    }
    return(
        <form>
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
                <input type="text" name="password" onChange={handleInputChange}/>
            </label>
            <button onClick={handleSubmit}>Sign up</button>
        </form>
    )
}
export default SignUp;