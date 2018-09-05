(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8b3bdqVAsxHmIifTyeQKDLT', 'Game', __filename);
// Script/Game.js

'use strict';

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

        // 这里引用 星星的资源
        starPrefab: {
            default: null,
            type: cc.Prefab
        },
        //星星产生后消失时间的随机范围
        maxStartDuration: 0,
        minStartDuration: 0,
        //地面节点，用于确定 星星生成的 高度 
        ground: {
            default: null,
            type: cc.Node
        },

        // 设置player  的属性
        player: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        //获取 地平面的 Y轴 坐标
        this.groundY = this.ground.y + this.ground.height / 2;
        //生成一个新的星星
        this.spawnNewStar();
    },

    spawnNewStar: function spawnNewStar() {
        //使用给定的横模版在场景中生成一个新模板
        var newStar = cc.instantiate(this.starPrefab);
        //将 新增的节点 增加到 Canvas 下面
        this.node.addChild(newStar);
        // 为 星星设置一个随机位置
        newStar.setPosition(this.getNewStarPosition());
        newStar.getComponent('Star').game = this;
    },

    /// 得到卫星新的 组标点信息
    getNewStarPosition: function getNewStarPosition() {
        var randX = 0;
        // 根据地平面位置和主角跳跃高度,随机到一个星星的Y坐标
        var randY = this.groundY + Math.random() * this.player.getComponent('player').jumbHeight + 50;
        // var maxX = thiS.node.width/2;
        var maxX = this.node.width / 2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        // 返回星星 坐标
        return cc.v2(randX, randY);
    },

    start: function start() {}
}

// update (dt) {},
);

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
        //# sourceMappingURL=Game.js.map
        