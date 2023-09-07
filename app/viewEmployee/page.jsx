"use client"

import { useEffect, useState } from "react";
import Link from "next/link";

const ViewEmployee = () => {
    const [employees, setEmployees] = useState([]);
    const [filters, setFilters] = useState({
        name: "",
        location: "",
    });
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await fetch("/drivelinelocker/api");
            const data = await response.json();
            setEmployees(data.data.employees);
        }

        if (employees.length < 1) {
            fetchEmployees();
        } else {
            const filteredEmployeesBuffer = employees.filter(employee =>
                (filters.location ? employee.location === filters.location : true) &&
                (filters.name ? employee.name.toLowerCase().includes(filters.name.toLocaleLowerCase()) : true)
            );

            setFilteredEmployees(filteredEmployeesBuffer);
        }
    }, [employees, filters]);

    const handleDelete = async (employee) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            const response = await fetch("/drivelinelocker/api/employees", { method: "DELETE", body: JSON.stringify({ employeeID: employee.id }) })
            const result = await response.json();

            if (result.success) {
                setEmployees((prevState) => prevState.filter((currentEmployee) => currentEmployee.id !== employee.id));
            }
        }
    }

    return (
<main className="flex w-full h-full" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="flex flex-col w-full h-full p-5">
                <div className="flex items-center gap-4 mb-4">
                    <Link className="inline-block bg-white hover:bg-[#ffa300] border border-[#ffa300] text-black font-bold py-2 px-4 rounded self-end" href="/">
                        Back
                    </Link>
                </div>
                <div className="overflow-auto">
                    <table className="w-full divide-y divide-gray-200">
                        <thead className="sticky top-0 bg-gray-200">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "#000000" }}>
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "#000000" }}>
                                    Loaction
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: "#000000" }}>
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredEmployees.map((employee) => (
                                <tr key={employee.name}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm" style={{ color: "#000000" }}>{employee.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm" style={{ color: "#000000" }}>{employee.location}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${employee.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {employee.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div>
                                            <Link className="mr-5" href={`/edit-item/${employee.name}`}>Edit</Link>
                                            <button onClick={() => handleDelete(employee)}>Delete</button>
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

export default ViewEmployee;