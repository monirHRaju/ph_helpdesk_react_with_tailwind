import React from 'react';
import Container from './Container';

const ToggleBtns = ({toggleStatus, setToggleStatus}) => {
    const btns = ['All', 'Pending', 'Submitted', 'Reviewed']
    return (
        
            <Container>
            <div className='text-right'>
                {
                    btns.map((btn, index) => {
                        return <button 
                                className={`toggle-btn 
                                    ${index == 0 && 'rounded-l-lg'}
                                    ${index == btns.length - 1  && 'rounded-r-lg'}
                                    ${toggleStatus == btn && '!bg-purple-500 !text-white'}`} 
                                key={index}
                                onClick={()=> setToggleStatus(btn)}>
                                    {btn}
                                </button>
                    })
                }
            
            {/* <button className={`toggle-btn  ${toggleStatus == 'Pending' && '!bg-purple-500 !text-white'}`} 
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
                </button> */}
            </div>
        </Container>
       
    );
};

export default ToggleBtns;