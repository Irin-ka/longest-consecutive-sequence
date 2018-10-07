module.exports = function longestConsecutiveLength(array) {
    if(array.length==0) return 0;
    //array = array.sort(function(a,b){return b-a});
    var arr = [[array[0], array[0]]]; 
    for (var i=1;i<array.length;i++){ 
      var v=array[i];
      var found =0; 
      for (var j=0;j<arr.length;j++){ 
          if((arr[j][0]-1) == v){ 
            arr[j][0]= v; 
            found=1; 
          }
          else if((arr[j][1]+1)==v){
            arr[j][1]= v; 
            found=1; 
          } 
      } 
      if(!found){ 
            arr.push([v, v]); 
      } 
    } 
    var min =arr[0][0], max = arr[0][1]; 
    for (var j=1;j<arr.length;j++){
        if(arr[j][0]<arr[j][1]){
              if(max == arr[j][0]){ 
                max = arr[j][1]; 
              }
              else if(min == arr[j][1]){ 
                min = arr[j][0]; 
              } 
              else if((max- min) < (arr[j][1] - arr[j][0])){ 
                max = arr[j][1]; 
                min = arr[j][0]; 
              } 
        } 
    } 
          //console.log(arr); 
          console.log(min,max,max-min+1);
          
          return max - min+1;
}
