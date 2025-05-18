import User from "../models/UserModel.js";

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }
        console.log("User found:", user);
        res.status(200).json(user);
    } catch (error) {
        console.error("Error in getUser:", error);
        res.status(500).json({ message: error.message });
    }
}