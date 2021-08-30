module.exports = function towelSort (matrix) {
    if (matrix == undefined) {
        return [];
    };
    let revers = [];
    let prov = true;
    for (let cell of matrix) {
        if (prov) {
            revers = revers.concat(cell);
            prov = false;
        } else {
            revers = revers.concat(cell.reverse());
            prov = true;
        }
    }
    return revers;
};
