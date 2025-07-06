import { userModel } from "../models/auth.model.js";
import { petModel } from "../models/pet.model.js";
import { serviceModel } from "../models/service.model.js";

const getProfile = async (req, res) => {
    try {
        // const { userId } = req.body;
        const user = await userModel.findById(req.user.id)
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

const updateProfile = async (req, res) => {
    try {
        const updates = req.body;

        const updatedUser = await userModel.findByIdAndUpdate(
          req.user.id,
          updates,
          { new: true, runValidators: true }
        );

        if (!updatedUser) {
          return res.status(404).json({ success: false, message: "User not found or unauthorized" });
        }

        res.status(200).json({ success: true, message: "Profile updated successfully", user: updatedUser});
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: "Internal Server Error" })
        }
}

const toggleUserRole = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await userModel.findById(userId);

    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    // Toggle role
    user.role = user.role === 'business' ? 'user' : 'business';
    await user.save();

    res.json({ success: true, message: `Switched to ${user.role}`, data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


const deleteAccount = async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.user.id);
    
    if (!deletedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    await petModel.deleteMany({ owner: req.user.id });
    await serviceModel.deleteMany({ owner: req.user.id });
    
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Account deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to delete account" });
  }
};

export { getProfile, updateProfile, toggleUserRole, deleteAccount }