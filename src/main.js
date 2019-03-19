function n_closest_points(array, n){
  var toCheck = []
  for(i = 0; i< array.length; i++){
    var distance = (Math.pow(array[i][0], 2))+(Math.pow(array[i][1], 2));
    toCheck.push({dis:distance, arr:array[i]});
  }
  if(n>toCheck.length){
    console.log(`n is greater is array length: ${toCheck.length}`);
    return 0;
  }else if(n==toCheck.length){
    var cp = [];
    closest_points = toCheck.sort((a,b)=>(a.dis>b.dis)? 1 : ((b.dis>a.dis)? -1 : 0));
    for(i = 0; i < closest_points.length;i++){
      cp.push(closest_points[i].arr);
    }
    return cp;

  }else{
    var cp = [];
    closest_points = toCheck.sort((a,b)=>(a.dis>b.dis)? 1 : ((b.dis>a.dis)? -1 : 0)).slice(0,n);
    for(i = 0; i < closest_points.length;i++){
      cp.push(closest_points[i].arr);
    }
    return cp;
  }
}
module.exports={n_closest_points};
