const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    return drivers.filter(function (drivers) {
        return drivers.toLowerCase() === string.toLowerCase()
    });
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function (drivers) {
        return drivers.toLowerCase().substring(0, string.length) === string.toLowerCase();
    });
}

function matchName(drivers, string) {
    return drivers.filter(function (drivers) {
        return drivers.name === string;
    })
}