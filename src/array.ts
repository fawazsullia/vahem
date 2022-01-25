//array operations

const arrayOperations : any = {
  //multiply first element of arr1 with first element of arr2, second with second and so on

  multiply: function (arr1 : number[], arr2: number[]) {
    if (arr1.length !== arr2.length) {
      return false;
    } else {
      let newArr : number[] = [];
      let result;
      for (let i = 0; i < arr1.length; i++) {
        result = arr1[i] * arr2[i];
        newArr.push(result);
      }

      return newArr;
    }
  },
};

module.exports = arrayOperations;
