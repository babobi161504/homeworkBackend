const taskControllers = require("./tasks");
const userControllers = require("./users");
const {httpStatusCodes} = require("../utils/constant")

function handleNotFound(request, response) {
  request.statusCode = httpStatusCodes.NOT_FOUND;
  response.end("Not found");
}
module.exports = {
  handleNotFound,
  taskControllers,
  userControllers,
};
