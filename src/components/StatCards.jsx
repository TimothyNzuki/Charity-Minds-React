function StatCards () {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-white rounded-lg shadow p-6">
                <h1 className="text-lg font-semibold text-gray-700">Total Users</h1>
                <p className="text-3xl font-bold text-blue-500">0</p>
            </div>

            <div className="text-center bg-white rounded-lg shadow p-6">
                <h1 className="text-lg font-semibold text-gray-700">New This Month</h1>
                <p className="text-3xl font-bold text-green-500">0</p>
            </div>

            <div className="flex items-center justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow">
                    + Add New User
                </button>
            </div>
        </section>
    );
}

export default StatCards;