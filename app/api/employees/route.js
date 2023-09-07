import { Employee } from "@/models";

export const GET = async (req, res) => {
    const employees = await Employee.findAll({
        order: [
            ["id", "ASC"]
        ]
    });

    return new Response(JSON.stringify({
        data: {
            employees,
        }
    }));
}

export const DELETE = async (req, res) => {

    console.log("Request Body:", req.body); // Check the request payload

    const { employees } = await req.json();

    console.log("Employees to Delete:", employees);S

    try {
        const deletedEmployeeCount = await Employee.destroy({
            where: {
                id: employees
            },
        });

        if (deletedEmployeeCount > 0) {
            return new Response(JSON.stringify({
                success: true,
                message: "Employee(s) deleted successfully.",
            }));
        } else {
            return new Response(JSON.stringify({
                success: false,
                message: "Employee(s) not found.",
            }));
        }
    } catch (error) {
        console.error("Error deleting employee:", error);
        return new Response(JSON.stringify({
            success: false,
            message: "Internal server error while deleting employee(s).",
        }));
    }
};