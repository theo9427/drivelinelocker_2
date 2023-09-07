import connectToDB from "@/db";
import { Item, Employee } from "@/models";

export const GET = async (req, res) => {
    const items = await Item.findAll({
        include: [{
            model: Employee,
            as: "employee_name",
            // required: true,
            attributes: ["name"]
        }],
        order: [
            ["id", "ASC"]
        ]
    });

    const employees = await Employee.findAll({});

    return new Response(JSON.stringify({
        data: {
            employees,
            items
        }
    }));
}