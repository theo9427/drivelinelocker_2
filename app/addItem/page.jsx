"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const AddItem = () => {
    const [message, setMessage] = useState("");
    const [employees, setEmployees] = useState([]);
    const [newItem, setNewItem] = useState({
        name: '',
        deviceLabel: '',
        employeeId: '',
        location: 'WA',
        category: 'other',
        status: 'ok',
        serialNumber: '',
        quantity: '',
    });

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch("/drivelinelocker/api");
            const data = await response.json();

            setEmployees(data.data.employees);
        }

        fetchItems();
    }, []);

    const handleChange = (e) => {
        setNewItem({ ...newItem, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        const response = await fetch("/drivelinelocker/api/item", { method: "POST", body: JSON.stringify(newItem) });
        const result = await response.json();

        if (result.success) {
            setMessage("New Item Added Successfully");

            setTimeout(() => {
                setMessage("");
                window.location.href = "/drivelinelocker";
            }, 500);

            setNewItem({
                name: '',
                deviceLabel:'',
                employeeId: '',
                location: 'WA',
                category: 'other',
                status: 'ok',
                serialNumber: '',
                quantity: '',
            });
        }
    };

    return (
        <main className="flex flex-col w-full h-full items-center justify-center" style={{ backgroundColor: "#FFFFFF" }}>
            <h1 className="mt-10 text-3xl">Add New Item</h1>
            <div className="flex flex-col w-2/3 h-full mt-10 p-5">
                {message && <p className="self-center font-semibold text-green-500">{message}</p>}
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Name:</label>
                        <input type="text" name="name" value={newItem.name} onChange={handleChange} required className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Device Label:</label>
                        <input type="text" name="deviceLabel" value={newItem.deviceLabel} onChange={handleChange} required className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Employee:</label>
                        <select onChange={e => setNewItem((prevState) => ({ ...prevState, employeeId: Number(e.target.value) }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
                            <option value=""></option>
                            {
                                employees.map((employee) => <option key={employee.id} value={employee.id}>{employee.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Location:</label>
                        <select defaultValue="WA" onChange={e => setNewItem((prevState) => ({ ...prevState, location: e.target.value }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
                            <option value="WA">WA</option>
                            <option value="AZ">AZ</option>
                            <option value="RMT">Remote</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Category:</label>
                        <select defaultValue={newItem.category} onChange={e => setNewItem((prevState) => ({ ...prevState, category: e.target.value }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
                            <option value="cable">Cable</option>
                            <option value="desktop">Desktop</option>
                            <option value="docking station">Docking Station</option>
                            <option value="keyboard">Keyboard</option>
                            <option value="laptop">Laptop</option>
                            <option value="monitor">Monitor</option>
                            <option value="mouse">Mouse</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Status:</label>
                        <select defaultValue="ok" onChange={e => setNewItem((prevState) => ({ ...prevState, status: e.target.value }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
                            <option value="ok">ok</option>
                            <option value="damaged">damaged</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Serial Number:</label>
                        <input type="text" name="serialNumber" value={newItem.serialNumber} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Quantity:</label>
                        <input type="number" name="quantity" value={newItem.quantity} onChange={e => setNewItem((prevState) => ({ ...prevState, quantity: Number(e.target.value) }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
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

export default AddItem;
