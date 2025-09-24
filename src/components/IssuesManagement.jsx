import React, { useState } from 'react';
import ToggleBtns from './ToggleBtns';
import Container from './Container';
import CountBox from './CountBox';

const IssuesManagement = () => {
    const [toggleStatus, setToggleStatus] = useState('All')
    return (
        <div>
            {/* Box */}
            <CountBox /> 

            {/* toggle buttons */}
            <ToggleBtns toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}></ToggleBtns>

        </div>
    );
};

export default IssuesManagement;