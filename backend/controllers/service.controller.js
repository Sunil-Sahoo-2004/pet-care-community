import { serviceModel } from "../models/service.model.js";
import { createBookingService, createServiceService, deleteServiceService, getAllServices, getServiceByIdService, updateServiceService } from "../services/service.service.js";

// create service
const createService = async (req, res) => {
    try {
        const {name, category, description, address, contactEmail, contactPhone, price } = req.body
        let image_filename = `${req.file.filename}`;

        const userId = req.user.id

        const allowedRoles = ["business", "admin"];
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ success: false, message: "Only business or admin can add services" });
        }

        if (!userId || !name || !category) {
            return res.status(400).json({ success: false, message: "UserId, name and category fields are required" })
        }

        const data = {
            userId,
            name,
            category,
            description,
            address,
            contactEmail,
            contactPhone,
            price: parseFloat(price),
            image : image_filename
        }

        const service = await createServiceService(data, true)
        if (service.alreadyExists) {
            return res.status(409).json({ success: false, message: "You already created a similar service with this name and category" });
        }

        res.status(201).json({ success: true, message: " Service added", service: service.service })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success:false, message: "Internal server error" })
    }
}

// get-my services
const getMyServices = async (req, res) => {
  try {
    const userId = req.user.id;

    const services = await serviceModel.find({ owner: userId }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      services,
    });
  } catch (error) {
    console.error('Error fetching user services:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

// get nearby services
const getNearbyServices = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ success:false, message: "Internal server error" })
    }
}

// get all servives
const getServices = async (req, res) => {
    try {
        const services = await getAllServices();
        res.status(200).json({success: true, services: services});
    } catch (error) {
        console.log(error)
        res.status(500).json({ success:false, message: "Internal server error" })
    }
}

// get service by id
const getServiceById = async (req, res) => {
    try {
        const service = await getServiceByIdService(req.params.id);
        res.status(200).json({ success: true, service: service});
    } catch (error) {
        console.log(error)
        res.status(500).json({ success:false, message: "Internal server error" })
    }
}

// update service
const updateService = async (req, res) => {
    try {
        const updatedService = await updateServiceService(req.params.id, req.body, req.user.id);
        res.status(200).json({ success: true, updatedData: updatedService });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success:false, message: "Internal server error" })
    }
}

// delete service
const deleteService = async (req, res) => {
    try {
        await deleteServiceService(req.params.id, req.user.id);
        res.status(200).json({ success: true, message: "Service deleted successfully" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success:false, message: "Internal server error" })
    }
}

// book service
const bookService = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const { date, note } = req.body;

    if (!date) {
        return res.status(400).json({ success: false, message: "Booking date is required" });
    }

    const booking = await createBookingService({
        userId: req.user._id,
        serviceId,
        date,
        note,
    });

    res.status(201).json({ success: true, message: "Booking request submitted and is pending provider approval.", data: booking });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success:false, message: "Internal server error" })
    }
}

export { createService, getMyServices, getNearbyServices, getServices, getServiceById, updateService, deleteService, bookService }