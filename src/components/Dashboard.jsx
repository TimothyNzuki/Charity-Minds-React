import React, {useState} from "react";
import StatCards from "./StatsCards";
import UserTable from "./UserTable";

export default function Dashboard () {
    // shared state for all users
    const [users,setUsers] = useState ([
        { 
                firstName: "Alice",
                lastName: "Johnson",
                username: "Alicejohn",
                email: "alicejohnson@gmail.com",
                phone: "0734567890",
                dob: "1990-4-20",
                gender: "Female",
                createdAt: "2026-07-23",
        },
        {
            firstName: "Nzuki",
            lastName: "Myles",
            username: "Uinum",
            email: "nzukimyles89@gmail.com",
            phone: "0736898045",
            dob: "2004-8-6",
            gender: "Male",
            createdAt: "2026-06-23",
        
        },
        {
            firstName: "Jannelle",
            lastName: "Wangari",
            username: "Jane",
            email: "janewangari@gmail.com",
            phone: "0794567234",
            dob: "1998-7-24",
            gender: "Female",
            createdAt: "2026-4-15",
        },
        {
            firstName: "Sam",
            lastName: "Muniu",
            username: "Gabriel",
            email: "samuinum@gmail.com",
            phone: "0768857459",
            dob: "2003-8-20",
            gender: "Male",
            createdAt: "2024-5-24",
        },
        {
            firstName: "Soniah",
            lastName: 'Owiti',
            username: "NanaOwiti",
            email: "soniahowiti@gmail.com",
            phone: "0723456782",
            dob: "1990-6-24",
            gender: "Female",
            createdAt: "2026-3-28",
        },
    ]);

    // Add user handler
    const handleAddUser = () =>{
        const newUser =
        {
        firstName: "New",
        lastName: "User",
        username: `user${users.length + 1}`,
        email: `new${users.length + 1}@example.com`,
        phone: "0700000000",
        dob: "2000-01-01",
        gender: "other",
        createdAt: new Date().toISOString().split("T")[0], // Todays date
    };
    setUsers([...users, newUser]);
}


// Stats
const totalUsers = users.length;
const currentMonth = new Date().getMonth();
const newThisMonth= users.filter((u) => 
    new Date(u.createdAt).getMonth() === currentMonth

).length;

return (
    <div className="p-6">
        {/*Pass stats+ add handler*/}
        <StatCards 
        totalUsers= {totalUsers}
        newThisMonth = {newThisMonth}
        onAddUser = {handleAddUser}
        />

        {/*Pass users  down to table*/}
        <UserTable users={users}/>
    </div>
);
}
