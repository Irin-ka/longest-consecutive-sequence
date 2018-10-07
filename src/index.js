module.exports = function longestConsecutiveLength(array) {
    if(array.length==0) return 0;
    array = array.sort(function(a,b){return a-b});
    //console.log(array);
    var min=max=array[0];
    var arr=[0];
    for (var i=1;i<array.length;i++){ 
          var v=array[i];
          if(max+1 == v){ 
            max++;
          }else{
            arr.push(max-min); 
            min=max =v;
          } 
       
    } 
    arr = arr.sort(function(a,b){return b-a});
          //console.log(arr); 
          console.log(arr[0]);
          
          return arr[0]+1;
}
