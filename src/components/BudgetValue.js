import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetValue = () => {
    const { dispatch, Currency, budget, expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.quantity));
    }, 0);

    const BUDGET_LIMIT = 20000;

    const checkAndThenSetBudget = (value) => {

        if (value < totalExpenses) {
            alert("Budget value cannot be lower than already allocated");
            return;
        }

        if (value <= 0) {
            alert("Budget value has to be greater than zero");
            return;
        }

        if (value > BUDGET_LIMIT) {
            alert("Budget value cannot be greater than " + BUDGET_LIMIT);
            return;
        }

        //alert("set value: " + value);

        changeBudget(value);
    }

    const changeBudget = (val) =>{
        dispatch({
            type: 'CHG_BUDGET',
            payload: val,
        })
    }

    return (

        <div className='alert alert-secondary'> Budget: {Currency}
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{size: 10, width: 100}}
                step='10'
                onChange={(event) => checkAndThenSetBudget(event.target.value)}>
            </input>            
        </div>
    );
};

export default BudgetValue;