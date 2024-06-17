const { body } = require('express-validator');

const createValidationSchema = {
  name: {
    in: ['body'],
    isString: {
      errorMessage: 'Name must be a string'
    },
    notEmpty: {
      errorMessage: 'Name cannot be empty'
    }
  },
  occupation: {
    in: ['body'],
    isString: {
      errorMessage: 'occupation must be a string'
    },
    notEmpty: {
      errorMessage: 'occupation cannot be empty'
    }
  }
};

module.exports = {
  createValidationSchema
};