
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr = [];
  let arr2 = [];

  if (matrix == undefined){
    return arr;
  }
  
  matrix.forEach((el, ind) => {
      if (ind % 2 != 0) {
          arr.push(el.reverse());
      } else {
          arr.push(el);
      }    
  })

  arr.forEach(e => arr2 = arr2.concat(e))
  return arr2;
}
