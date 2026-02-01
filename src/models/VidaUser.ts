import { Schema, model, models } from "mongoose";

const VidaUserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: "" },
  address: { type: String, default: "" },
  AppRole: { type: String, default: "User" },
  bioDescription: { type: String, default: "" },
  designation: { type: String, default: "" },
  isActive: { type: Boolean, default: true },
  isOnWebsite: { type: Boolean, default: true },
  serialNo: { type: String, default: "" },
  profilePicture: { type: String, default: "" },
  signature: { type: String, default: "" },
}, { timestamps: true });

const VidaUser = models.VidaUser || model("VidaUser", VidaUserSchema, "vidausers");

export default VidaUser;
