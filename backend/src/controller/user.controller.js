import { validationResult } from "express-validator"

export const greetName = (req, res) => {  // user controller for doing the operations for the route
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }

    if (/[^a-zA-Z\s]/.test(name)) {
        return res.status(400).json({ error: "Name must contain only letters" });
    }

    res.status(200).json({ message: `Hello, ${name}! Welcome to Younglabs` })
}