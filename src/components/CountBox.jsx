import React from 'react';
import Container from './Container';

const CountBox = ({data}) => {
    const pendingData = data.filter(ele => ele.status == "Pending")
    const submittedData = data.filter(ele => ele.status == "Submitted")
    const reviewedData = data.filter(ele => ele.status == "Reviewed")

    // console.log([pendingData, submittedData, reviewedData])
    return (
         <Container>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 p-2 md:p-0'>
                
                <div className='flex flex-col items-center justify-center bg-gray-500 h-[250px] text-white rounded-lg p-7 text-center md:my-[80px]'>
                    <h2 className='text-4xl font-bold'>Pending</h2>
                    <p className='text-4xl font-semibold'>{pendingData.length}</p>
                </div>
                
                <div className='flex flex-col items-center justify-center bg-purple-500 h-[250px] text-white rounded-lg p-7 text-center md:my-[80px]'>
                    <h2 className='text-4xl font-bold'>Submitted</h2>
                    <p className='text-4xl font-semibold'>{submittedData.length}</p>
                </div>
                
                <div className='flex flex-col items-center justify-center bg-teal-500 h-[250px] text-white rounded-lg p-7 text-center md:my-[80px]'>
                    <h2 className='text-4xl font-bold'>Reviewed</h2>
                    <p className='text-4xl font-semibold'>{reviewedData.length}</p>
                </div>
                
                </div>
            </Container>
    );
};

export default CountBox;