"use strict";

var module = (function () {
    function createBicyclePrototype(){
    
        return {
            speed: 0,
            applyBrake: function (val) { speed -= val; },
            speedup: function (val) { speed += val; }
        };
    };
    
    
    function createMountainBikePrototype(prototype){
        return Object.create(prototype,
            {
                gear: { value : 1},
                setGear: function (val) { gear = val }
            });
    }
    
    function start() {
        let proto = createBicyclePrototype();
        console.log(proto)
        let mountainBike = createMountainBikePrototype(proto);
        let bike = Object.create(proto);
        console.log(mountainBike);
        console.log(bike);
    }

    function Bike() {
        this.speed = 0;
        this.applyBrake = function (val) { speed -= val; };
        this.speedup = function (val) { speed += val; };
    }

    function MountainBike() {
        Bike.call(this);
        this.gear = 1;
    }
    MountainBike.prototype.setGear = function (val) { gear = val };
   
    
    return { createBicyclePrototype, createMountainBikePrototype, start, Bike, MountainBike };
})();
        

class Bike {
    constructor() {
        this.speed = 0;
    }

    applyBrake(val) {
        this.speed -= this.speed;
    }
    speedup(val) {
        this.speed += this.speed;
    }
}


window.onload = function () {
    console.log("----Object.create")
    module.start();

    console.log("----using class")
    let mountainBike = new Bike();
    mountainBike.gear = 1;
    mountainBike.setGear = function (val) { this.gear = val };

    console.log(mountainBike);

    console.log("----using constructor")
    let otherBike = new module.Bike();
    console.log(otherBike);
    let otherMountainBike = new module.MountainBike();
    console.log(otherMountainBike);


}