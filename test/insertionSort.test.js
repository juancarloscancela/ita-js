var assert = require("assert");
var insertionSort = require('../algorithms/insertionSort').insertionSort;

describe('Insertion Sort', function(){
  describe('#insertionSort(unsortedArray)', function(){
    it('should sort [6,5,4,2,1,3] -> [1,2,3,4,5,6]', function(){
      var unsortedArray = [6,5,4,2,1,3];
      var sortedArray = insertionSort(unsortedArray);
      assert.equal(1, sortedArray[0]);
      assert.equal(2, sortedArray[1]);
      assert.equal(3, sortedArray[2]);
      assert.equal(4, sortedArray[3]);
      assert.equal(5, sortedArray[4]);
      assert.equal(6, sortedArray[5]);
    })
  })
});
