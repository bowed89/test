const { registerUser, loginUser } = require('../services/auth.service');
const { successResponse, errorResponse } = require('../utils/response.util');

const register = async (req, res) => {
    const { usuario, nombres, primer_apellido, segundo_apellido, password } = req.body;

    try {
        const userId = await registerUser(usuario, nombres, primer_apellido, segundo_apellido, password);
        successResponse(res, { userId });

    } catch (err) {
        errorResponse(res, err.message);
    }
};

const login = async (req, res) => {
    const { usuario, password } = req.body;
    
    try {
        const user = await loginUser(usuario, password);
        successResponse(res, user);

    } catch (err) {
        errorResponse(res, err.message);

    }
};

module.exports = {
    register,
    login
};
