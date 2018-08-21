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
        },
        scoreDisplay: {
            default: null,
            type: cc.Label
        },

        /// 声音 播放组件
        scoreAudio: {
            default: null,
            type: cc.AudioClip
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        //初始化计时器 
        this.timer = 0;
        this.starDuration = 0;
        //获取 地平面的 Y轴 坐标
        this.groundY = this.ground.y + this.ground.height / 2;
        //生成一个新的星星
        this.spawnNewStar();
        // 初始化积分信息
        this.score = 0;
    },

    spawnNewStar: function spawnNewStar() {
        //使用给定的横模版在场景中生成一个新模板
        var newStar = cc.instantiate(this.starPrefab);
        //将 新增的节点 增加到 Canvas 下面
        this.node.addChild(newStar);
        // 为 星星设置一个随机位置
        newStar.setPosition(this.getNewStarPosition());
        //为 星星添加新的组件    
        newStar.getComponent('Star').game = this;
        // 重置计时器，根据消失时间范围 随机取一个值
        this.starDuration = this.minStartDuration + Math.random() * (this.maxStartDuration - this.minStartDuration);
        this.timer = 0;
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

    start: function start() {},


    update: function update(dt) {
        //每帧更新计时器 超过限度还没有生成新的星星
        //就会调用失败的逻辑
        if (this.timer > this.starDuration) {
            this.gameOver();
            return;
        }

        this.timer += dt;
    },

    /// 获取积分信息
    gainScore: function gainScore() {
        this.score += 1;
        //更新UI 界面文字
        this.scoreDisplay.string = "Score" + this.score;
        //播放得分音效, 当获取积分时进行 音效的播放
        cc.audioEngine.playEffect(this.scoreAudio, false);
    },

    ///
    gameOver: function gameOver() {
        this.player.stopAllActions(); // 停止节点上的所有Action 
        cc.director.loadScene("game"); // 重新加载游戏场景
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
        //# sourceMappingURL=Game.js.map
        