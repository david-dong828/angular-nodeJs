exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content only for User role.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content ONLY FOR ADMIN.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content only 4 moderator.");
};