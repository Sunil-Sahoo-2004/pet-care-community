import { userModel } from "../models/auth.model.js";
import { serviceModel } from "../models/service.model.js";
import mongoose from "mongoose";

// Get all services
const getAllServices = async () => {
  return await serviceModel.find({}).populate("owner", "-password");
};

// Get a service by ID
const getServiceByIdService = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid service ID");
  }

  const service = await serviceModel.findById(id).populate("owner", "-password");
  if (!service) {
    throw new Error("Service not found");
  }

  return service;
};

// Create a new service
const createServiceService = async (data, checkDuplicate = false) => {
    if (checkDuplicate) {
      const existing = await serviceModel.findOne({
        owner: data.userId,
        name: data.name,
        category: data.category
      });

      if (existing) {
        return { alreadyExists: true };
      }
    }
    const newService = new serviceModel({
        owner: data.userId,
        name: data.name,
        category: data.category,
        description: data.description,
        address: data.address,
        contactEmail: data.contactEmail,
        contactPhone: data.contactPhone,
    });

    const saved = await newService.save();
    return { alreadyExists: false, service: saved };
};

// Update service (only by owner)
const updateServiceService = async (id, updates, userId) => {
    const service = await serviceModel.findById(id);
    const user = await userModel.findById(userId);

    if (!service) throw new Error("Service not found");

    const isOwner = service.owner.toString() === user._id.toString();
    const isAdmin = user.role === "admin";

    if (!isOwner && !isAdmin) {
      throw new Error("Unauthorized: Only owner or admin can update this service");
    }

    return await serviceModel.findByIdAndUpdate(id, updates, { new: true });
};

// Delete service (only by owner)
const deleteServiceService = async (id, userId) => {
    const service = await serviceModel.findById(id);
    const user = await userModel.findById(userId);

    if (!service) {
      throw new Error("Service not found");
    }

    const isOwner = service.owner.toString() === user._id.toString();
    const isAdmin = user.role === "admin";

    if (!isOwner && !isAdmin) {
      throw new Error("Unauthorized: Only owner or admin can delete this service");
    }

    await serviceModel.findByIdAndDelete(id);
};

export { getAllServices, getServiceByIdService, createServiceService, updateServiceService, deleteServiceService }