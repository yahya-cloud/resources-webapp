const checkValidity = (value, rules) => {
    let isValid = true
    if (!rules) {
      return true
    }
    if (rules.required) {
      isValid = value.trim() !== '' && isValid
    }
    if (rules.checkEmail) {
      const pattern =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      isValid = pattern.test(value) && isValid
    }
  
    if (rules.minSize) {
      isValid = value.trim().length > rules.minSize
    }
    return isValid
  }
  
  export default checkValidity
  