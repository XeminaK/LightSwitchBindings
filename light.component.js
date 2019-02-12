"use strict;"
//declaring light as a variable object, needs to match the component name
const light = {
//template injects the html content where the <light> tag is in the html
template: `
<section class="light"   ng-class="{lighton: $ctrl.isOn}">
<p>Light</p>
<light-switch on-flip="$ctrl.onFlip();"></light-switch>
</section>
`, //<lightSwitch> = the light switch component  html content
//lightSwitch needs to be light-switch since html cannot read camelcase
//ng-class= lighton will be binded to vm.isOn (only if it is true)
controller: [function() {
    //this controller creates the vm as an object, and allows you to declare variables
    const vm = this;
    vm.isOn = false;
    vm.onFlip = function() { //created the onFlip function that switch the class "lighton" from true to 
        if (vm.isOn === true) {
            vm.isOn = false;
        } else if (vm.isOn === false) {
            vm.isOn = true;
            //vm.isOn = !vm.isOn ->another way to do this if/else statement but in one line
        }

    }
}]


};




angular.module("LightApp")
.component("light", light)

//parent component