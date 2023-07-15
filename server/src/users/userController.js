import users from "../data/users.js";

export const user = async (req, res) => {
    const foundUser = users.find(u => u.userName == req.body.name) || null;
    if (foundUser == null) {
        return res.status(400).json({ message: "No user Found" })
    }
    else if (foundUser.password == req.body.password) {
        return res.status(200).json({ message: "True" })
    }
    else {
        return res.status(400).json({ message: "Incorrect Password" })
    }
};
