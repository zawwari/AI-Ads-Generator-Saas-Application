import React from 'react'
import AiToolsList from './_components/AiToolsList';
import UsersAddList from './_components/UsersAddList';

function Dashboard() {
    return (
        <div>
            <AiToolsList/>
            <UsersAddList/>
        </div>
    )
}

export default Dashboard;