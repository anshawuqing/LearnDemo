(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/player.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'dd4759RCDxFZrZplhYILAhF', 'player', __filename);
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

    onLoad: function onLoad() {

        // 初始化跳跃动作
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);

        //加速度 方向开关
        this.accLeft = false;
        this.accRight = false;
        // 主角当前水平方向开关
        this.xSpeed = 0;

        ///  注册订阅事件  
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onkeydown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onkeyUp, this);
    },

    start: function start() {},
    ///跳跃
    setJumpAction: function setJumpAction() {
        //跳跃上升
        var JumpUp = cc.moveBy(this.jumbDuration, cc.v2(0, this.jumbHeight)).easing(cc.easeCubicActionOut());
        // 下落 
        var jumpDown = cc.moveBy(this.jumbDuration, cc.v2(0, -this.jumbHeight)).easing(cc.easeCubicActionIn());
        //  不断重复 
        return cc.repeatForever(cc.sequence(JumpUp, jumpDown));
    },

    // 当鼠标按下去的事件
    onkeydown: function onkeydown(event) {
        console.log("测试——按下—————事件" + event.keyCode);
        switch (event.keyCode) {
            case 68:
                this.accRight = true;
                break;
            case 65:
                this.accLeft = true;
                break;
        }
    },
    onkeyUp: function onkeyUp(event) {
        console.log("测试———抬起—————事件" + event.keyCode);
        switch (event.keyCode) {
            case 68:
                this.accRight = false;
                break;
            case 65:
                this.accLeft = false;
                break;
        }
    },


    update: function update(dt) {
        //根据当前加速度方向 每帧更新速度
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        } else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }

        //限制主角的速度不能超过 最大值
        if (Math.abs(this.xSpeed) > this.maxMoveSped) {
            this.xSpeed = this.maxMoveSped * this.xSpeed / Math.abs(this.xSpeed);
        }

        // 根据当前 速度更新主角信息
        this.node.x += this.xSpeed * dt;
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=player.js.map
        