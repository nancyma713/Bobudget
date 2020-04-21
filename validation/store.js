const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateStoreInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : "";
  data.zipcode = validText(data.zipcode) ? data.zipcode : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Store name is required";
  }

  if (Validator.isEmpty(data.zipcode)) {
    errors.zipcode = "Zipcode field is required";
  }

  if (!Validator.isLength(data.zipcode, { min: 5, max: 5 })) {
    errors.zipcode = "Zipcode field is not valid";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
