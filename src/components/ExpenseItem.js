import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Currency} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handleIncreaseItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'INCREASE_ITEM',
            payload: item,
        });
    };

    const handleDecreaseItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DECREASE_ITEM',
            payload: item,
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{parseInt(props.quantity)}</td>

        <td>
            <svg width='2.2em' height='2.2em' color="green" onClick={handleIncreaseItem}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1536 1536"><path fill="currentColor" d="M1216 832V704q0-26-19-45t-45-19H896V384q0-26-19-45t-45-19H704q-26 0-45 19t-19 45v256H384q-26 0-45 19t-19 45v128q0 26 19 45t45 19h256v256q0 26 19 45t45 19h128q26 0 45-19t19-45V896h256q26 0 45-19t19-45zm320-64q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768z"></path></svg>
        </td>

        <td>
            <svg width='2.2em' height='2.2em' color="red" onClick={handleDecreaseItem}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1536 1536"><path fill="currentColor" d="M1216 832V704q0-26-19-45t-45-19H384q-26 0-45 19t-19 45v128q0 26 19 45t45 19h768q26 0 45-19t19-45zm320-64q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768z"></path></svg>
        </td>

        <td><FaTimesCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;