// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
    
        ///当星星 和主角之间的距离小于这个 数值时就会完成收集
        pickRadius: 0,
 
    },
    // LIFE-CYCLE CALLBACKS:
    
     onLoad: function () 
     {

     },

    start () {

    },
 
    ///得到和 主角之间的距离
    getPlayerDistance : function ()
    {
      //根据 player 节点位置 判断距离
      var playerPos = this.game.player.getPosition(); 
    
      // 根据 2 点位置 计算 2点之间距离
      var dist = this.node.position.sub(playerPos).mag();
      console.log("小星星距离————————"+dist);
      return dist; 
    },
     
    ///星星的回收行为
     onPicked:function()
     {
        //当星星被收集时，调用 Game 中的接口生成一个新的星星
        this.game.spawnNewStar();
       // spawnNewStar
       // 调用收集的信息
       this.game.gainScore();
        //然后销毁 当前星星节点
        this.node.destroy();
        
     },
    
     update : function (dt) 
     {
        //每帧判断  和主角 之间的距离 是否小于收集距离
       if(this.getPlayerDistance()< this.pickRadius )
       {
        console.log("看到小星星");
         //调用 收集行为
        this.onPicked();
          return ;
       }

       //根据脚本中的 计时器更新星星的透明度
       var  opacityRatio =  1 - this.game.timer/this.game.starDuration;
       var minOpactiy  = 50;
       this.node.opacity =  minOpactiy+  Math.floor(opacityRatio*(255 - minOpactiy)); 
     },
});
