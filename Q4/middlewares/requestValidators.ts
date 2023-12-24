import { Request, Response, NextFunction } from 'express';

const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    const allowedDetails = ["name", "brand", "price", "currentStock", "reviews", "description"];
    const requestDetails = Object.keys(req.body) as string[];

    // Check if the request has only allowed details
    const invalidDetails = requestDetails.filter((detail) => !allowedDetails.includes(detail));

    if (invalidDetails.length > 0) {
        return res.status(400).json({ error: `Invalid details: ${invalidDetails.join(", ")}` });
    }

    next();
};

const validateRequiredFields = (req: Request, res: Response, next: NextFunction) => {
    const requiredFields = ["name", "brand", "price", "currentStock", "reviews", "description"];
    const missingFields = requiredFields.filter((field) => !req.body.hasOwnProperty(field));

    // Check if all required fields (except id) are present
    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(", ")}` });
    }
    next();
};

export { validateRequest, validateRequiredFields };
