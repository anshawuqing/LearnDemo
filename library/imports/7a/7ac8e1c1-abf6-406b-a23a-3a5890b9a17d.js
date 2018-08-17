"use strict";
cc._RF.push(module, '7ac8eHBq/ZAa6I6OliQuaF9', 'TextScrip');
// Script/TextScrip.js

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

    /// 在这里进行属性的声明和 编辑器内部的声明
    /// javascrip  内置的属性可以 直接进行赋值
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

        UI_show: cc.Label,
        UI_Node: cc.Node

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    /*  start: function () 
        {
            var label  = this.getComponent(cc.Label);
            
            cc.error("输出文件测试"+label);
       },
    */

    /*start   ()   // 更改 字体的内容和 字体大小
       {
        var label  = this.UI_show.string; 
          if (label) {
             
           cc.error("测试新的写法"+label); this.UI_show.string = " UI组件更改完成"; this.UI_show.FontSize  =  60; } 
                  }, */
    start: function start() {
        // var node  = this.node;   
        //var label  = this.getComponent(cc.Label);
        //var text =  this.name + "dddd";

    } // update (dt) {},
});

cc._RF.pop();