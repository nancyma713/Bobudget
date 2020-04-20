const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.username = validText(data.username) ? data.username : "";
  data.password = validText(data.password) ? data.password : "";
  data.password2 = validText(data.password2) ? data.password2 : "";

  ///
  data.first_name = validText(data.first_name) ? data.first_name : "";
  data.last_name = validText(data.last_name) ? data.last_name : "";
  data.zipcode = validText(data.zipcode) ? data.zipcode : "";
  data.budget = validText(data.budget) ? data.budget : "";
  ///

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  }

  if (!Validator.isLength(data.username, { min: 2, max: 20 })) {
    errors.password = "Username must be between 3 to 20 characters ";
  }

  ////
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name field is required";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastNname = "Last name field is required";
  }

  if (Validator.isEmpty(data.zipcode)) {
    errors.zipcode = "Zipcode field is required";
  }

  //   if (!Validator.isInt(data.zipcode)) {
  //     errors.zipcode = "Zipcode field is not valid";
  //   }

  if (!Validator.isLength(data.zipcode, { min: 5, max: 5 })) {
    errors.zipcode = "Zipcode field is not valid";
  }

  if (Validator.isEmpty(data.budget)) {
    errors.budget = "Budget field is required";
  }

  if (!Validator.isFloat(data.budget, { min: 5 })) {
    errors.budget = "Budget must be greater than 5";
  }
  ////

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
