# redRain
# 调用方法：
  var redRain=new createRain()
# 自己配置参数：
var redRain=new createRain({
    size:10,
    duration:20000,//单位为ms
    creatCallBack : function(){
    //逻辑代码xxx
    },//创建红包时的回调
    clickCallBack : function(){
    //逻辑代码xxx
    },//点击红包回调
    overCallBack  : function(){
      //逻辑代码xxx
    }//红包结束回调
})
