import * as Yup from 'yup';

import * as validationConstants from './constants';

const signUpValidationSchema = Yup.object({
  firstName: Yup
    .string()
    .min(
      validationConstants.INPUT_TEXT_MIN_LENGTH,
      validationConstants.INPUT_MIN_LENGTH_VALIDATION_TEXT,
    )
    .max(
      validationConstants.INPUT_TEXT_MAX_LENGTH,
      validationConstants.INPUT_MAX_LENGTH_VALIDATION_TEXT,
    )
    .matches(
      validationConstants.INPUT_NAME_PATTERN,
      validationConstants.INPUT_NAME_VALIDATION_TEXT,
    )
    .required(validationConstants.INPUT_REQUIRED_VALIDATION_TEXT)
    .trim(),
  lastName: Yup
    .string()
    .min(
      validationConstants.INPUT_TEXT_MIN_LENGTH,
      validationConstants.INPUT_MIN_LENGTH_VALIDATION_TEXT,
    )
    .max(
      validationConstants.INPUT_TEXT_MAX_LENGTH,
      validationConstants.INPUT_MAX_LENGTH_VALIDATION_TEXT,
    )
    .matches(
      validationConstants.INPUT_NAME_PATTERN,
      validationConstants.INPUT_NAME_VALIDATION_TEXT,
    )
    .required(validationConstants.INPUT_REQUIRED_VALIDATION_TEXT)
    .trim(),
  email: Yup
    .string()
    .email(validationConstants.INPUT_EMAIL_VALIDATION_TEXT)
    .min(
      validationConstants.INPUT_TEXT_MIN_LENGTH,
      validationConstants.INPUT_MIN_LENGTH_VALIDATION_TEXT,
    )
    .max(
      validationConstants.INPUT_TEXT_MAX_LENGTH,
      validationConstants.INPUT_MAX_LENGTH_VALIDATION_TEXT,
    )
    .required(validationConstants.INPUT_REQUIRED_VALIDATION_TEXT)
    .trim(),
  password: Yup
    .string()
    .min(
      validationConstants.PASSWORD_INPUT_MIN_LENGTH,
      validationConstants.INPUT_MIN_LENGTH_VALIDATION_TEXT,
    )
    .max(
      validationConstants.INPUT_TEXT_MAX_LENGTH,
      validationConstants.INPUT_MAX_LENGTH_VALIDATION_TEXT,
    )
    .required(validationConstants.INPUT_REQUIRED_VALIDATION_TEXT)
    .trim(),
});

const signInValidationSchema = Yup.object({
  email: Yup
    .string()
    .email(validationConstants.INPUT_EMAIL_VALIDATION_TEXT)
    .min(
      validationConstants.INPUT_TEXT_MIN_LENGTH,
      validationConstants.INPUT_MIN_LENGTH_VALIDATION_TEXT,
    )
    .max(
      validationConstants.INPUT_TEXT_MAX_LENGTH,
      validationConstants.INPUT_MAX_LENGTH_VALIDATION_TEXT,
    )
    .required(validationConstants.INPUT_REQUIRED_VALIDATION_TEXT)
    .trim(),
  password: Yup
    .string()
    .min(
      validationConstants.PASSWORD_INPUT_MIN_LENGTH,
      validationConstants.INPUT_MIN_LENGTH_VALIDATION_TEXT,
    )
    .max(
      validationConstants.INPUT_TEXT_MAX_LENGTH,
      validationConstants.INPUT_MAX_LENGTH_VALIDATION_TEXT,
    )
    .required(validationConstants.INPUT_REQUIRED_VALIDATION_TEXT)
    .trim(),
});

const profileValidationSchema = Yup.object({
  firstName: Yup
    .string()
    .min(
      validationConstants.INPUT_TEXT_MIN_LENGTH,
      validationConstants.INPUT_MIN_LENGTH_VALIDATION_TEXT,
    )
    .max(
      validationConstants.INPUT_TEXT_MAX_LENGTH,
      validationConstants.INPUT_MAX_LENGTH_VALIDATION_TEXT,
    )
    .matches(
      validationConstants.INPUT_NAME_PATTERN,
      validationConstants.INPUT_NAME_VALIDATION_TEXT,
    )
    .required(validationConstants.INPUT_REQUIRED_VALIDATION_TEXT)
    .trim(),
  lastName: Yup
    .string()
    .min(
      validationConstants.INPUT_TEXT_MIN_LENGTH,
      validationConstants.INPUT_MIN_LENGTH_VALIDATION_TEXT,
    )
    .max(
      validationConstants.INPUT_TEXT_MAX_LENGTH,
      validationConstants.INPUT_MAX_LENGTH_VALIDATION_TEXT,
    )
    .matches(
      validationConstants.INPUT_NAME_PATTERN,
      validationConstants.INPUT_NAME_VALIDATION_TEXT,
    )
    .required(validationConstants.INPUT_REQUIRED_VALIDATION_TEXT)
    .trim(),
  about: Yup
    .string()
    .min(
      validationConstants.INPUT_TEXT_MIN_LENGTH,
      validationConstants.INPUT_MIN_LENGTH_VALIDATION_TEXT,
    )
    .max(
      validationConstants.TEXTAREA_INPUT_MAX_LENGTH,
      validationConstants.INPUT_MAX_LENGTH_VALIDATION_TEXT,
    )
    .trim(),
});

export {
  signUpValidationSchema,
  signInValidationSchema,
  profileValidationSchema,
};
