function getSecondLargest(nums) {
    let  max=nums[0]
    let premax=nums[0];
      for(let i=0;i<nums.length;i++){
         if(nums[i]>max) {
             premax=max;
             max=nums[i];
         }
           if ((nums[i] > premax) && (nums[i] < max)) {
            premax = nums[i];
        }
     }
      return premax;
}