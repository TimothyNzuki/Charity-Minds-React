function Pagination () {
    return (
        <div className="flex justify-center items-center text-blue-500 gap-4">
            <button className="p-1 rounded hover:text-blue-700 border">Previous</button>
            <span>Page 1 of 1</span>
            <button className="p-1 rounded hover:text-blue-700 border">Next</button>
        </div>
    );
}

export default Pagination;