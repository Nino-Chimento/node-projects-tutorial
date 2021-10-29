const { CustomAPIError } = require("../errors/custom-erros");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ mes: err.message });
  }
  return res.status(500).json({ msg: "wrong" });
};

module.exports = errorHandlerMiddleware;
