"use strict";
const lightSwitch = {
    bindings: {
        onFlip: "&"
    },
    template: `
    <button ng-click="$ctrl.onFlip();">Switch</button>
    `
} //you first have to bind the attribute to the light-switch tag (so it references this lightswitch component)
//whatever attribute you created, it needs to be the same name you use in the bindings
//for example: if your binding attr is turnOn, you need to reference $ctrl.turnOn();




angular.module("LightApp")
.component("lightSwitch", lightSwitch);