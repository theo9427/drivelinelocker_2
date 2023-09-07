"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

const EditItem = ({ params }) => {
    const [message, setMessage] = useState("");
    const [employees, setEmployees] = useState([]);
    const [item, setItem] = useState({
        name: "",
        employee_id: "",
        employee_name: "",
        location: "",
        category: "",
        status: "",
        serial_number: "",
        quantity: ""
    });
    const { itemId } = params;

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch("/drivelinelocker/api");
            const data = await response.json();

            setEmployees(data.data.employees);
        }

        const fetchItem = async () => {
            const response = await fetch(`/drivelinelocker/api/item?itemId=${itemId}`);
            const item = await response.json();

            setItem(item);
        }

        fetchItem();

        fetchItems();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        const response = await fetch("/drivelinelocker/api/item", { method: "PATCH", body: JSON.stringify({ itemId, itemData: item }) });
        const result = await response.json();

        if (result.success) {
            setMessage("Item Updated Successfully");
        }
    };

    return (
        <main className="flex flex-col w-full h-full items-center justify-center" style={{ backgroundColor: "#FFFFFF" }}>
            <h1 className="mt-10 text-3xl">Edit Item</h1>
            <div className="flex flex-col w-2/3 h-full mt-10 p-5">
                {message && <p className="self-center font-semibold text-green-500">{message}</p>}
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Name:</label>
                        <input type="text" name="name" value={item.name} onChange={e => setItem((prevState) => ({ ...prevState, name: e.target.value }))} required className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Employee:</label>
                        <select value={item.employee_id ? item.employee_id : ""} onChange={e => setItem((prevState) => ({ ...prevState, employee_id: Number(e.target.value) }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
                            <option value=""></option>
                            {
                                employees.map((employee) => <option key={employee.id} value={employee.id}>{employee.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Location:</label>
                        <select value={item.location} onChange={e => setItem((prevState) => ({ ...prevState, location: e.target.value }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
                            <option value="WA">WA</option>
                            <option value="AZ">AZ</option>
                            <option value="RMT">Remote</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Category:</label>
                        <select value={item.category} onChange={e => setItem((prevState) => ({ ...prevState, category: e.target.value }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
                            <option value="cable">cable</option>
                            <option value="desktop">desktop</option>
                            <option value="docking station">docking station</option>
                            <option value="keyboard">keyboard</option>
                            <option value="laptop">laptop</option>
                            <option value="monitor">monitor</option>
                            <option value="mouse">mouse</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Status:</label>
                        <select value={item.status} onChange={e => setItem((prevState) => ({ ...prevState, status: e.target.value }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
                            <option value="ok">ok</option>
                            <option value="damaged">damaged</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Serial Number:</label>
                        <input type="text" name="serialNumber" value={item.serial_number ? item.serial_number : ""} onChange={e => setItem((prevState) => ({ ...prevState, serial_number: e.target.value }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Quantity:</label>
                        <input type="number" name="quantity" value={item.quantity ? item.quantity : ""} onChange={e => setItem((prevState) => ({ ...prevState, quantity: Number(e.target.value) }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
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

export default EditItem;
