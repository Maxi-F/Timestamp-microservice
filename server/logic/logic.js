const dateObject = (date) => {
    return {
        unix: date.getTime(),
        utc: date.toUTCString()
    };
}

const takeDate = (dateString) => {
    if (dateString.includes('-')) { // If it contains a -, the dateString is treated as an ISO standard date
        return new Date(dateString);
    } else {
        let milliseconds = Number(dateString);
        return new Date(milliseconds);
    }
}

const verifyDateInput = (dateString) => {
    if (!dateString) {
        let date = new Date();
        return dateObject(date);
    } else {
        let date = takeDate(dateString);
        if (date === "Invalid Date") {
            return {
                error: date
            }
        } else {
            return dateObject(date);

        }

    }
}

module.exports = {
    verifyDateInput
}