import User from "../models/UserModel.js";

export const getUser = async (req, res) => {
    try {
        const userId = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}