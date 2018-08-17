"use strict";
cc._RF.push(module, 'dd4759RCDxFZrZplhYILAhF', 'player');
// Script/player.js

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

        //主角跳跃高度
        jumbHeight: 0,
        // 主角跳跃移动时间
        jumbDuration: 0,
        // 最大移动速度
        maxMoveSped: 0,
        // 加速度
        accel: 0

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    ///跳跃
    setJumpAction: function setJumpAction() {}
    // update (dt) {},
});

cc._RF.pop();