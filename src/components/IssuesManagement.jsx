import React, { use, useState } from 'react';
import ToggleBtns from './ToggleBtns';
import Container from './Container';
import CountBox from './CountBox';
import Card from './Card';

const IssuesManagement = ({issuePromise}) => {
    const initialData = use(issuePromise)

    const [data, setData] = useState(initialData)
    // console.log(issueData)
    const [toggleStatus, setToggleStatus] = useState('All')

    const filteredData = toggleStatus == "All"
        ? data
        : data.filter(ele => ele.status == toggleStatus
        )
    
    // console.log(toggleStatus, filteredData)
    return (
        <div>
            {/* Box */}
            <CountBox data={data}/> 

            {/* toggle buttons */}
            <ToggleBtns toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}></ToggleBtns>

            <Container>
                {
                    filteredData.length == 0 
                    ? <h2 className='mb-[50px] text-2xl font-bold text-center text-purple-500'>No Data Found</h2>
                    : <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mb-[50px] p-2 md:p-0'>
                        {
                            filteredData.map((issue, index) => {
                                return <Card issue={issue} key={index} data={data} setData={setData}></Card>
                            })
                        }
                    </div>
                }
            </Container>

        </div>
    );
};

export default IssuesManagement;

// {
//     "ticketId": "PH-2001",
//     "subject": "Password reset request",
//     "description": "User forgot password and needs a reset.",
//     "status": "Submitted",
//     "priority": "High",
//     "category": "Authentication",
//     "createdAt": "2025-09-20T10:15:00Z",
//     "assignedTo": "Agent001",
//     "requestedBy": "Jhankar Mahbub",
//     "userImg": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
// }