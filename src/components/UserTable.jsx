function UserTable() {
    return (
        <div className="overflow-x-auto bg-white shadow rounded-lg">
            <table className="min-w-full border-black border-2">
                <thead className="text-gray-700 bg-gray-200">
                    <tr>
                        <th className="py-3 px-4 text-left">First Name</th>
                        <th className="py-3 px-4 text-left">Last Name</th>
                        <th className="py-3 px-4 text-left">User Name</th>
                        <th className="py-3 px-4 text-left">Email</th>
                        <th className="py-3 px-4 text-left">Phone Number</th>
                        <th className="py-3 px-4 text-left">DOB</th>
                        <th className="py-3 px-4 text-left">Gender</th>
                        <th className="py-3 px-4 text-left">Created At</th>
                    </tr>
                </thead>
                <tbody> {/*Rows will be rendered here*/} </tbody>
            </table>
        </div>     
    );
}

export default UserTable;