const validate = values => {
    const errors = {}
    if (!values.who) {
        errors.who = 'Please fill in the value for Who to continue'
    }
    if (!values.when) {
        errors.when = 'Please fill in the value for When to continue'
    }
    if (!values.where) {
        errors.where = 'Please fill in the value for Where to submit the form'
    }
    if (!values.what) {
        errors.what = 'Please fill in the value for What to continue'
    }
    return errors
}

export default validate
