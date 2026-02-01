"use server";

import dbConnect from "@/lib/dbConnect";
import VidaUser from "@/models/VidaUser";

export async function getTeamMembers() {
  try {
    await dbConnect();
    const members = await VidaUser.find({ isOnWebsite: true, isActive: true })
      .sort({ serialNo: 1 })
      .lean();
    
    // Convert _id to string for client-side serialization
    return members.map((member) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const m = member as any;
      return {
        ...m,
        _id: String(m._id),
      };
    });
  } catch (error) {
    console.error("Error fetching team members:", error);
    return [];
  }
}
