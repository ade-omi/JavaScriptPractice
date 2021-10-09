//practicing parameters
function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}
sayThanks('Cole');

//monitor count using return
function monitorCount(rows, columns) {
    return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

//helper functions
function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

//function expression with fat arrow // Arrow Functions
const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};
// can also be turned into a sing line
const plantNeedsWater = day => day === 'Wednesday' ? true : false;

console.log(plantNeedsWater('Tuesday'));