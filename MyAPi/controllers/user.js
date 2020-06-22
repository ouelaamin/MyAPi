const User = require('../models').User;

module.exports = {
    list(req, res) {
        return User
            .findAll({
                order: [
                    ['createdAt', 'DESC'],
                ],
            })
            .then((users) => res.status(200).send(users))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        return User
            .findById(req.params.id)
            .then((user) => {
                if (!user) {
                    return res.status(404).send({
                        message: 'user Not Found',
                    });
                }
                return res.status(200).send(user);
            })
            .catch((error) => res.status(400).send(error));
    },
};