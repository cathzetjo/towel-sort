// You should implement your task here.

module.exports = function towelSort(matrix) {
    let array = [];
    if (!matrix) return array;
    matrix.forEach((value, index) => {
        if (index % 2 === 0) {
            array = array.concat(value);
        } else {
            array = array.concat(value.reverse())
        }
    });
    return array;
};
