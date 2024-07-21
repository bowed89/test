const successResponse = (res, data) => {
    res.status(200).json({ success: true, data });
};

const errorResponse = (res, error) => {
    res.status(400).json({ success: false, error });
};

module.exports = {
    successResponse,
    errorResponse
};
