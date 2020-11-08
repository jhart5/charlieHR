
today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
}


class User {
    constructor(name, date_of_birth) {
        this.name = name;
        this.date_of_birth = {
            year: date_of_birth.getFullYear(),
            month: date_of_birth.getMonth(),
            date: date_of_birth.getDate(),
        }
    }

    // get current date, put into object for easy reference
    //Returns an Integer representing the user’s current age
    age() {

        // if today's date is equal or past birthday, user is a full year old

       if (today.month > this.date_of_birth.month || (today.month === this.date_of_birth.month && today.date >= this.date_of_birth.date)) {
           return today.year - this.date_of_birth.year
       }
       
       // if user has not yet had their birthday this year, their age is 1 less
       return today.year - this.date_of_birth.year - 1

    }

    next_birthday() {
        // if user has had their birthday this year, birthday is next year
        if (today.month > this.date_of_birth.month || (today.month === this.date_of_birth.month && today.date >= this.date_of_birth.date)) {
            return new Date(today.year + 1, this.date_of_birth.month, this.date_of_birth.date)
        }
        // else their birthday is this year
        return new Date( today.year, this.date_of_birth.month, this.date_of_birth.date)
    }
}

module.exports = User;


