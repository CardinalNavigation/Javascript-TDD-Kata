function stringParse(nums) {
  for (let i = 0; i < nums.length; i++) {
    return Number(nums[i]);
  }
}

stringParse("1");
console.log(stringParse("1,2"));

module.exports = stringParse;
