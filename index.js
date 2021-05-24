// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

    const returnFirstTwoDrivers= function() {
        return [drivers[0], drivers[1]]
    }

    const returnLastTwoDrivers= function() {
        return [drivers[2], drivers[3]]
        }

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fareQuintupler) {
    return function (integer) {
    return fareQuintupler * integer
    }
}

 
const fareDoubler= function(fare) {
    return (fare * 2)
}
const fareTripler= function(fare) {
    return fare * 3
}
function selectDifferentDrivers([drivers], returnFirstTwoDrivers) {
    return drivers, returnLastTwoDrivers() || drivers, returnFirstTwoDrivers()

}
