import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { AppProvider } from './context/AppContext';
import BudgetValue from './components/BudgetValue';
import RemainingValue from './components/RemainingValue';
import TotalAllocatedValue from './components/TotalAllocatedValue';
import DepartmentList from './components/DepartmentList';
import DepartmentSelected from './components/DepartmentSelected';
import Currency from './components/Currency';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'> 
                    <div className='col-sm'>
                        <BudgetValue />
                    </div>
                    <div className='col-sm'>
                        <RemainingValue />
                    </div>
                    <div className='col-sm'>
                        <TotalAllocatedValue />
                    </div>
                    <div className='col-sm'>
                        <Currency />
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <DepartmentList />
                    </div>
                </div>
                <h3 className='mt-3'>Change Allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <DepartmentSelected/>
                    </div>
                </div>
            </div>
        </AppProvider>
    ); // return
}; // App
export default App;