# redRain 双11红包雨
# 调用方法：
## 1.直接调用
  var redRain=new createRain()  
## 2.可以自己配置参数  
var redRain=new createRain({  
    size:10  
    duration:60000,  
    creatCallBack : function(){//创建红包时的回调   
        <!-- xxxxxxxxx代码逻辑 -->   
    },  
    clickCallBack : function(){//点击红包回调   
        <!-- xxxxxxxxx代码逻辑 -->  
    },  
    overCallBack  : function(){//红包结束回调   
        <!-- xxxxxxxxx代码逻辑 -->  
    }  
})  
