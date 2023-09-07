"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

const AddEmployee = () => {
    const [message, setMessage] = useState("");
    const [newEmployee, setNewEmployee] = useState({
        name: '',
        status: 'Active',
        location: 'WA'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("/drivelinelocker/api/add-employee", {
                method: "POST",
                body: JSON.stringify(newEmployee),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.ok) {
                setMessage("Employee Added Successfully."); // Set the success message

                setTimeout(() => {
                    setMessage("");
                    window.location.href = "/drivelinelocker";
                }, 500);

                setNewEmployee({
                    name: '',
                    status: 'Active',
                    location: 'WA'
                }); // Clear the form inputs
            } else {
                setMessage("Employee addition failed."); // Set an error message if necessary
            }
        } catch (error) {
            console.error("Error adding employee:", error);
            setMessage("Employee addition failed."); // Set an error message if there's an exception
        }
    };
    
    return (
        <main className="flex flex-col w-full h-full items-center justify-center" style={{ backgroundColor: "#FFFFFF" }}>
            <h1 className="mt-10 text-3xl">Add New Employee</h1>
            <div className="flex flex-col w-2/3 h-full mt-10 p-5">
                <div className="self-center font-semibold text-green-500">{message}</div>
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Name:</label>
                        <input type="text" name="name" required value={newEmployee.name} onChange={e => setNewEmployee((prevState) => ({ ...prevState, name: e.target.value }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Location:</label>
                        <select defaultValue={newEmployee.location} onChange={e => setNewEmployee((prevState) => ({ ...prevState, location: e.target.value }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
                            <option value="WA">WA</option>
                            <option value="AZ">AZ</option>
                            <option value="RMT">Remote</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Status:</label>
                        <select defaultValue={newEmployee.status} onChange={e => setNewEmployee((prevState) => ({ ...prevState, status: e.target.value }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
                            <option value="active">active</option>
                            <option value="inactive">inactive</option>
                        </select>
                    </div>
                    <button type="submit" className="mr-5 bg-[#ffa300] hover:bg-white border border-[#ffa300] text-black font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                    <Link href="/" type="submit" className="bg-white hover:bg-[#ffa300] border border-[#ffa300] text-black font-bold py-2 px-4 rounded">
                        Cancel
                    </Link>
                </form>
            </div>
        </main>
    );
};

export default AddEmployee;
