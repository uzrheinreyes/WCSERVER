module.exports = function (firstName, lastName) {
    this.firstName;
    this.lastName;
    this.fullName = function() {
        return this.firstName + ' ' + lastName;
    }
}