import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Dashboard.css';
import MapComponent from './MapComponent.js/MapComponent';
import Buy from './Buy/Buy';
import Sell from './Sell/Sell';
import { useHistory } from 'react-router';
import LogoIcon from '../../images/logo.png';
const Dashbord = ()=>{
    const [haveAcces, setHaveAcces] = useState(false);
    const history = useHistory();

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
        history.push('/');

    }
    return(
        <>
            {haveAcces?
            <DashItself logOut={logOutAaction}/>
            :
            <p>Acces denied</p>
            }
        </>
    )
}
const DashItself = ({logOut})=>{
    const [selectedScreen, setSelectedScreen] = useState('sell');
    const history = useHistory();
    const changeSelectedScreen = (next)=>{
        if(next == 'sell')
        {
            setSelectedScreen('sell')
        }
        else if(next == 'buy')
        {
            setSelectedScreen('buy')
        }
    }
    return(
        <div className="home-container">
            <div className="home-menu-bar">
                <div className="home-menu-bar-nav">
                    <div className="dashboard-menu-logo-container">
                        <img src={LogoIcon} alt='logo icon' onClick={()=>{history.push('/')}}/>
                    </div>
                    <div className="home-nav-buy-container">
                        <span 
                            className={selectedScreen == 'buy' ? 'selected-span':''}
                            onClick={()=>{changeSelectedScreen('buy')}}
                        >
                            Buy
                        </span>
                    </div>
                    <div className="home-nav-sell-container">
                        <span 
                            className={selectedScreen == 'sell' ? 'selected-span':''}
                            onClick={()=>{changeSelectedScreen('sell')}}
                        >
                            Sell
                        </span>
                    </div>
                </div>
                <div className="home-menu-user-icon">
                    <div className="log-out-btn-home" onClick={()=>{logOut()}}>
                        <span>Log out</span>
                    </div>
                </div>
            </div>
            <div className="home-content">
                {selectedScreen == 'buy'?
                    <Buy />
                    :
                    <Sell />
                }
            </div>
        </div>
    )
}
export default Dashbord;
