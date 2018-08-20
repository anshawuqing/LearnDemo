"use strict";
cc._RF.push(module, 'fc149gmG5VLi4dofBejSfo1', 'Star');
// Script/Star.js

"use strict";

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
        pickRadius: 0

    },
    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {},

    start: function start() {},


    ///得到和 主角之间的距离 
    getPlayerDistance: function getPlayerDistance() {
        //根据 player 节点位置 判断距离
        var playerPos = this.game.player.getPosition();
    }
    // update (dt) {},
});

cc._RF.pop();