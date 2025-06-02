import { userModel } from "../models/auth.model.js";
import { petModel } from "../models/pet.model.js";
import mailSender from "../utils/mailSender.js";

const contactPetOwnerService = async ({ petId, senderName, senderEmail, message }) => {
    // Find the pet
    const pet = await petModel.findById(petId);
    if (!pet) {
        throw new Error("Pet not found");
    }

    // Find the pet owner
    const owner = await userModel.findById(pet.owner);
    if (!owner || !owner.email) {
        throw new Error("Pet owner not found or email missing");
    }

    // Compose the message
    const subject = `Inquiry about your pet: ${pet.name}`;
    const emailBody = `
        <h3>Hello ${owner.name},</h3>
        <p>You have received a new message regarding your pet <strong>${pet.name}</strong>:</p>
        <p><strong>From:</strong> ${senderName} (${senderEmail})</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
    `;

    // Send the email
    await mailSender(owner.email, subject, emailBody);

    return { success: true, message: "Message sent to pet owner successfully." };
};

export { contactPetOwnerService }