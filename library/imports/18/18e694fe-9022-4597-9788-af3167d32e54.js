"use strict";
cc._RF.push(module, '18e69T+kCJFl5eIrzFn0y5U', 'TableTest');
// Script/TableTest.js

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

    /// 字体组件进行编辑学习
    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        var TableUI = this.getComponent(cc.Label);
        var TabelColor = this.getComponent(cc.LabelOutline);

        if (TableUI != null) {
            TableUI.string = "在这里进行更改";
        }
        if (TabelColor != null) {
            cc.log("终于等到你，还好我没放弃");
            TabelColor.color = cc.Color.RED;
        } else {
            cc.log("没有找到相关组件");
        }
    }
}

// update (dt) {},
);

cc._RF.pop();