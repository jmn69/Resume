const Joi = require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  AWS_ACCESS_KEY: Joi.string()
    .required()
    .description('AWS access key required'),
  AWS_SECRET_ACCESS_KEY: Joi.string()
    .required()
    .description('AWS secret access key required'),
})
  .unknown()
  .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  AwsAccessKey: envVars.AWS_ACCESS_KEY,
  AwsAccessSecretKey: envVars.AWS_SECRET_ACCESS_KEY,
};

export default config;
