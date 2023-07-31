import connection from "../database/database.js";
export const user = async (req, res) => {
    const [foundUser] = await connection.query(`SELECT * FROM usercredential WHERE Username = "` + req.body.name + `"`);
    let password = req.body.password;
    let pass = password.padStart(password.length+1,'2');
    let paxss = pass.padEnd(pass.length+1,'2');
    if (foundUser.length == 0) {
        return res.status(400).json({ message: "No user Found" })
    }
    else if (foundUser[0].Password == paxss) {
        return res.status(200).json({ userId: foundUser[0].ID, message: "True" })
    }
    else {
        return res.status(400).json({ message: "Incorrect Password" })
    }
};
