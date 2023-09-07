import { Item, Employee } from "@/models";

export const GET = async (req, res) => {
    const itemId = req.nextUrl.searchParams.get("itemId");

    const item = await Item.findByPk(itemId, {
        include: [{
            model: Employee,
            as: "employee_name",
            // required: true,
            attributes: ["name"]
        }],
    });

    return new Response(JSON.stringify(item.dataValues));
}

export const POST = async (req, res) => {
    const body = await req.json();

    if (!body.deviceLabel) {
        body.deviceLabel = null;
    }

    if (!body.employeeId) {
        body.employeeId = null;
    }

    if (!body.serialNumber) {
        body.serialNumber = null;
    }

    if (!body.quantity) {
        body.quantity = null;
    }

    const itemToAdd = {
        ...body,
        employee_id: body.employeeId
    };

    try {
        const newItem = await Item.create(itemToAdd);

        if (newItem) {
            return new Response(JSON.stringify({
                success: true,
                data: newItem.dataValues
            }));
        } else {
            return new Response(JSON.stringify({
                success: false,
            }));
        }
    } catch (error) {
        return new Response(JSON.stringify({
            success: false,
        }));
    }
}

export const PATCH = async (req, res) => {
    const body = await req.json();
    const item = body.itemData;
    delete item.employee_name;

    if (!item.employee_id) {
        item.employee_id = null;
    }

    try {
        const updatedItem = await Item.update(item, {
            where: {
                id: item.id
            },
        });
    
        if (updatedItem.length > 0) {
            return new Response(JSON.stringify({
                success: true,
            }));
        } else {
            return new Response(JSON.stringify({
                success: false,
            }));
        }
    } catch (error) {
        return new Response(JSON.stringify({
            success: false,
        }));
    }
}

export const DELETE = async (req, res) => {
    const body = await req.json();
    const itemId = body.itemId;

    try {
        const deletedItem = await Item.destroy({
            where: {
                id: itemId
            },
        });

        if (deletedItem > 0) {
            return new Response(JSON.stringify({
                success: true,
            }));
        } else {
            return new Response(JSON.stringify({
                success: false,
            }));
        }
    } catch (error) {
        return new Response(JSON.stringify({
            success: false,
        }));
    }
}