var number = function (busStops) {
    return busStops
        .map(([getOn, getOff]) => getOn - getOff)
        .reduce((acc, curr) => acc + curr, 0);
};






console.log(number([[10, 0], [3, 5], [5, 8]])); // 5
