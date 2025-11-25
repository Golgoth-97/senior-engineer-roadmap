function brutForceContainsDuplicate(nums: number[]): boolean {
      // Your solution here
      for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                return true;
            }
        }
      }
      return false;
  }

function containsDuplicate(nums: number[]): boolean {
    // Your solution here
    const map = new Map<number, boolean>();
    for(const num of nums){
        if(map.has(num)){
            return true;
        } else {
            map.set(num, true);
        }
    }
    return false;
}
  // Test cases
  console.log(brutForceContainsDuplicate([1,2,3,1]));     // true
  console.log(brutForceContainsDuplicate([1,2,3,4]));     // false
  console.log(brutForceContainsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true

  // Test cases
  console.log(containsDuplicate([1,2,3,1]));     // true
  console.log(containsDuplicate([1,2,3,4]));     // false
  console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true