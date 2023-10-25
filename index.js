// Code your solution in this file!

function distanceFromHqInBlocks(value) {
    return Math.abs(42 - value);
}

function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    } else if (feet <= 2000) {
        return (feet - 400) * 0.02;
    } else if (feet < 2500) {
        return 25;
    } else return 'cannot travel that far';
}