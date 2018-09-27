
module.exports = function main(String) {
var sum=0;
  const cal=param=>{
	  param=param.toString();
	  for(const i in param){
		  let num=parseInt(param[i]);
	  };
	  sum+=num;
  };
  return sum;
};