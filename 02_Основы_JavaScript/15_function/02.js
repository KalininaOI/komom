function checkAge(age) {
    return checkAge = (age > 18) ? true : confirm('Родители разрешили?')
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?')
}