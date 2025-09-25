import React from 'react';

const Card = ({issue, data, setData}) => {
    const handleClick = () => {
        const currentData = data.find(elem => elem.ticketId == issue.ticketId)
        const restdData = data.filter(elem => elem.ticketId != issue.ticketId)

        if(currentData.status == "Pending"){
            currentData.status = "Submitted"
        } else if(currentData.status == "Submitted") {
            currentData.status = "Reviewed"
        }
         
        // console.log({expectedData, restdData})
        setData([currentData, ...restdData])
    }
    return (
                 <div 
                 className='bg-gray-200 p-5 rounded-lg cursor-pointer'
                 onClick={() => handleClick()}
                 >
                    <img src={issue.userImg} alt="" className='rounded-full w-[80px]' /> 
                    <h3 className='font-semibold my-4'>{issue.requestedBy }</h3>
                    <div className='flex gap-3'>
                        <h1 className='text-2xl font-bold'>{issue.subject }</h1>
                        <div className='flex gap-3'>
                             
                            <button 
                            className={`p-2 font-semibold rounded-md 
                            cursor-pointer 
                            ${
                                issue.priority == "Low" 
                                ? "text-red-500 bg-red-200" 
                                : issue.priority == "Medium"
                                ? "text-yellow-500 bg-yellow-200" 
                                : "text-green-500 bg-green-200" 
                            }`}
                            
                            >
                                {issue.priority}
                            </button>
                            <button 
                            className={`p-2 font-semibold rounded-md 
                            cursor-pointer 
                            ${
                                issue.status == "Pending" 
                                ? "text-red-500 bg-red-200" 
                                : issue.status == "Submitted"
                                ? "text-yellow-500 bg-yellow-200" 
                                : "text-green-500 bg-green-200" 
                            }`}
                            
                            >
                                {issue.status}
                            </button>
                        </div>
                    </div>
                    <p>{issue.description}</p>
                </div>
    );
};

export default Card;