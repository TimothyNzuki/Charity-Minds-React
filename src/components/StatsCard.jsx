import React from "react";

export default function StatsCard ({title, value, color}) {
    return (
        <div className="text-center bg-white rounded-lg shadow p-6">
            <h1 className="text-lg font-semibold text-gray-700">{title} </h1>
            <p className={`text-3xl font-bold ${color}`}>{value} </p>
        </div>
    );

}
