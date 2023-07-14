import users from "../data/users.js";

export const user = async (req, res) => {
    const foundUser = users.find(u => u.username == req.body.name) || null;
    if (foundUser == null) {
        res.json(null);
    }
    else if (foundUser.password == req.body.password) {
        res.json(true);
    }
    else {
        res.json(false);
    }
};
