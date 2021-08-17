import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Dashbord = ()=>{
    const [haveAcces, setHaveAcces] = useState(false);

    useEffect(()=>{
        //verifica tokenul dat la login
        const config = {
            headers:{
                'auth-token': localStorage.getItem('token') 
            }
        }
        axios.get('api/posts',config)
        .then(res=>{
            console.log(res)
            setHaveAcces(true)
        })
        .catch(err=>console.log(err))
    })
    const logOutAaction = ()=>{
        localStorage.clear();
        window.location.reload();

    }
    return(
        <div className="home-container">
            {haveAcces?
            <>
            <p>Logged in</p>
            <button onClick={logOutAaction}>Log out</button>
            </>
            :
            <p>Acces denied</p>
            }
        </div>
    )
}

export default Dashbord;
