 function createRain(opt){
    return this.init(opt);
 }
 createRain.prototype.init=function(opt){
        var options=$.extend({
            size          : 2,//红包数量,默认每秒创建2个
            content       : '',//内容可以是HTML
            className     : 'redPack',//默认父级class
            redClassName  : 'rain-hb',//默认红包class
            topRange      : 100,//top基数
            leftRange     : 80,//left基数
            duration      : 15,//红包雨持续时间
            creatCallBack : function(){},//创建红包时的回调
            clickCallBack : function(){},//点击红包回调
            overCallBack  : function(){}//红包结束回调

        },opt||{});
        var rainHtml='',
            o=options,
            rainTimers=setInterval(function(){
                rainHtml='';
                for(var i=0;i<o.size;i++){
                    var top=-Math.floor(Math.random()*o.topRange+20)+"%", //取-20%-120%之间的随机值。
                        left=Math.floor((Math.random()+0.1)*o.leftRange)+"%";//取10%-90%之间随机值
                    rainHtml+= '<a class="'+o.redClassName+' hb-anim" style="top:'+top+';left:'+left+';cursor:pointer;background-size:cover;">'+o.content+'</a>';
                }
                $("."+o.className).append(rainHtml);
                
            },1000);
            $("."+o.className).on('click',"."+o.redClassName,function(e){
                e.preventDefault();
                $(this).hide();
                if(o.clickCallBack){
                    o.clickCallBack();
                }
            });
            if(o.creatCallBack){
                o.creatCallBack();
            }
            var durationTimer=setTimeout(function(){
                clearInterval(rainTimers);
                clearTimeout(durationTimer);
                if(o.overCallBack){
                    o.overCallBack();
                    
                }
            },o.duration*1000);
  
    }