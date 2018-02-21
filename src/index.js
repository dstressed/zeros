module.exports = function getZerosCount(n) {
  var count = 0;
    var number = n;
    while (number >= 1){
        var temp = Math.floor(number / 5);
        number = temp;
        count += temp;
    }
    return count;
};
