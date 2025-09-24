import React from 'react';
import Container from './Container';

const ToggleBtns = ({toggleStatus, setToggleStatus}) => {
    return (
        
            <Container>
            <div className='text-right'>
            <button 
            className={`toggle-btn  rounded-l-lg ${toggleStatus == 'All' && '!bg-purple-500 !text-white'}`} 
            onClick={()=> setToggleStatus('All')}>
                All
                </button>
            <button className={`toggle-btn  ${toggleStatus == 'Pending' && '!bg-purple-500 !text-white'}`} 
            onClick={()=> setToggleStatus('Pending')}>
                Pending
                </button>
            <button 
            className={`toggle-btn  ${toggleStatus == 'Submitted' && '!bg-purple-500 !text-white'}`} 
            onClick={()=> setToggleStatus('Submitted')}>
                Submitted
                </button>
            <button 
            className={`toggle-btn  rounded-r-lg ${toggleStatus == 'Reviewed' && '!bg-purple-500 !text-white'}`}
            onClick={()=> setToggleStatus('Reviewed')}>
                Reviewed
                </button>
            </div>
        </Container>
       
    );
};

export default ToggleBtns;