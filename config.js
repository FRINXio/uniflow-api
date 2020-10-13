const dotenv = require("dotenv");
dotenv.config();

const env = process.env;
const conf = {
  conductorHost: env.CONDUCTOR_HOST || "conductor-server:8080",
  schellarHost: env.SCHELLAR_HOST || "schellar:7000"
};

module.exports = conf;
