import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
    
    const style = {
        "background-color": "lime"
    }

    return (
        <div className='alert alert-secondary'> Currency: {
            <select name="Currency" id="Currency" style={style} onChange={event=>changeCurrency(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>	
        }	
        </div>
    ); // return
};

export default Currency;