const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  }
  if (!values.address) {
    errors.address = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }

  if (!values.userName) {
    errors.userName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.description) {
    errors.description = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

export default validate