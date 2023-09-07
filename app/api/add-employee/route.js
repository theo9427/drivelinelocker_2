import { Employee } from "@/models";

export const POST = async (req, res) => {
    const body = await req.json();

    const employeeToAdd = body;

    const newEmployee = await Employee.create(employeeToAdd);

    return new Response(JSON.stringify({
        data: "Hello"
    }));
}