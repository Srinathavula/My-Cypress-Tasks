{
  "validCredentials": {
    "username": "revis86613@codgal.com",
    "password": "Dinesh@d18"
  },
  "invalidCredentials": {
    "username": "invalid-test-user@example.com",
    "password": "WrongPassword123"
  },
  "edgeCaseCredentials": {
    "emptyUsername": "",
    "emptyPassword": "",
    "wrongCasePassword": "dinesh@d18",
    "specialCharUsername": "test@#$%^&*@example.com",
    "shortPassword": "Ab1",
    "longPassword": "ThisIsAVeryLongPasswordThatExceedsTheMaximumAllowedLengthForPasswordFieldsAndShouldBeRejectedByTheSystem123456789",
    "lockedUsername": "locked-account@example.com",
    "inactiveUsername": "inactive-account@example.com",
    "validUsernameWithSpecialChars": "test.user+automation@example.com"
  },
  "testMessages": {
    "loginErrorGeneric": "error",
    "validationError": "required",
    "accountLocked": "locked",
    "accountInactive": "inactive"
  }
}