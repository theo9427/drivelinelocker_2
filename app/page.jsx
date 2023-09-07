"use client"

import { useEffect, useState } from "react";
import Link from "next/link";

const HomePage = () => {
    const [items, setItems] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [filters, setFilters] = useState({
        category: "",
        location: "",
        employee: "",
        name: "",
        serialNumber: "",
        quantity: ""
    });
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch("/drivelinelocker/api");
            const data = await response.json();

            setItems(data.data.items);

            setEmployees(data.data.employees);
        }

        if (items.length < 1) {
            fetchItems();
        } else {
            const filteredItemsBuffer = items.filter(item =>
                (filters.category ? item.category === filters.category : true) &&
                (filters.location ? item.location === filters.location : true) &&
                (filters.employee ? item.employee_id === filters.employee : true) &&
                (filters.name ? item.name.toLowerCase().includes(filters.name.toLocaleLowerCase()) : true) &&
                (filters.serialNumber ? item.serial_number === filters.serialNumber : true) &&
                (filters.quantity ? item.quantity === filters.quantity : true)
            );

            setFilteredItems(filteredItemsBuffer);
        }
    }, [items, filters]);

    const handleDelete = async (item) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            const response = await fetch("/drivelinelocker/api/item", { method: "DELETE", body: JSON.stringify({ itemId: item.id }) })
            const result = await response.json();

            if (result.success) {
                setItems((prevState) => prevState.filter((currentItem) => currentItem.id !== item.id));
            }
        }
    }

    return (
        <main className="flex w-full h-full" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="flex flex-col w-full h-full p-5">
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex gap-4">
                        <label className="block text-sm font-medium" style={{ color: "#000000" }}>
                            Filter by Category:
                            <select value={filters.category} onChange={e => setFilters((prevState) => ({ ...prevState, category: e.target.value }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
                                <option value="">All</option>
                                <option value="cable">Cable</option>
                                <option value="desktop">Desktop</option>
                                <option value="docking station">Docking Station</option>
                                <option value="keyboard">Keyboard</option>
                                <option value="laptop">Laptop</option>
                                <option value="monitor">Monitor</option>
                                <option value="mouse">Mouse</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                        <label className="block text-sm font-medium" style={{ color: "#000000" }}>
                            Filter by Location:
                            <select value={filters.location} onChange={e => setFilters((prevState) => ({ ...prevState, location: e.target.value }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
                                <option value="">All</option>
                                {/* Add your locations here */}
                                <option value="WA">WA</option>
                                <option value="AZ">AZ</option>
                                <option value="RMT">Remote</option>
                            </select>
                        </label>
                        <label className="block text-sm font-medium" style={{ color: "#000000" }}>
                            Filter by Employee:
                            <select value={filters.employee} onChange={e => setFilters((prevState) => ({ ...prevState, employee: Number(e.target.value) }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
                                <option value="">All</option>
                                {
                                    employees
                                    .slice()
                                    .sort((a,b) => a.name.localeCompare(b.name))
                                    .map((employee) => <option key={employee.id} value={employee.id}>{employee.name}</option>)
                                }
                            </select>
                        </label>
                        <label className="block text-sm font-medium" style={{ color: "#000000" }}>
                            Filter by Name:
                            <input type="text" value={filters.name} onChange={e => setFilters((prevState) => ({ ...prevState, name: e.target.value }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                        </label>
                        <label className="block text-sm font-medium" style={{ color: "#000000" }}>
                            Filter by Serial Number:
                            <input type="text" value={filters.serialNumber} onChange={e => setFilters((prevState) => ({ ...prevState, serialNumber: e.target.value }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                        </label>
                        <label className="block text-sm font-medium" style={{ color: "#000000" }}>
                            Filter by Quantity:
                            <input type="number" value={filters.quantity} onChange={e => setFilters((prevState) => ({ ...prevState, quantity: Number(e.target.value) }))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                        </label>
                    </div>
                    <Link className="inline-block bg-[#ffa300] hover:bg-white border border-[#ffa300] text-black font-bold py-2 px-4 rounded self-end" href="/addItem">
                        Add Item
                    </Link>
                    <Link className="inline-block bg-[#ffa300] hover:bg-white border border-[#ffa300] text-black font-bold py-2 px-4 rounded self-end" href="/addEmployee">
                        Add Employee
                    </Link>
                    <Link className="inline-block bg-white hover:bg-[#ffa300] border border-[#ffa300] text-black font-bold py-2 px-4 rounded self-end" href="/viewEmployee">
                        View Employees
                    </Link>
                </div>

                <div className="overflow-auto">
                    <table className="w-full divide-y divide-gray-200">
                        <thead className="sticky top-0 bg-gray-200">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "#000000" }}>
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "#000000" }}>
                                    Device Label
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "#000000" }}>
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "#000000" }}>
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "#000000" }}>
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "#000000" }}>
                                    Employee
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "#000000" }}>
                                    Location
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "#000000" }}>
                                    Serial Number
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "#000000" }}>
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "#000000" }}></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredItems.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm" style={{ color: "#000000" }}>{item.id}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm" style={{ color: "#000000" }}>{item.device_label}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm" style={{ color: "#000000" }}>{item.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm" style={{ color: "#000000" }}>{item.category}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'ok' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm" style={{ color: "#000000" }}>{item.employee_name ? item.employee_name.name : "none"}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm" style={{ color: "#000000" }}>{item.location}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm" style={{ color: "#000000" }}>{item.serial_number}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm" style={{ color: "#000000" }}>{item.quantity}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div>
                                            <Link className="mr-5" href={`/edit-item/${item.id}`}>Edit</Link>
                                            <button onClick={() => handleDelete(item)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default HomePage;