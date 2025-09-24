import React from 'react';
import Container from './Container';

const CountBox = () => {
    return (
         <Container>
                <div className='grid grid-cols-3 gap-5'>
                
                <div className='flex flex-col items-center justify-center bg-gray-500 h-[250px] text-white rounded-lg p-7 text-center my-[80px]'>
                    <h2 className='text-4xl font-bold'>Pending</h2>
                    <p className='text-4xl font-semibold'>0</p>
                </div>
                
                <div className='flex flex-col items-center justify-center bg-purple-500 h-[250px] text-white rounded-lg p-7 text-center my-[80px]'>
                    <h2 className='text-4xl font-bold'>Submitted</h2>
                    <p className='text-4xl font-semibold'>0</p>
                </div>
                
                <div className='flex flex-col items-center justify-center bg-teal-500 h-[250px] text-white rounded-lg p-7 text-center my-[80px]'>
                    <h2 className='text-4xl font-bold'>Reviewed</h2>
                    <p className='text-4xl font-semibold'>0</p>
                </div>
                
                </div>
            </Container>
    );
};

export default CountBox;