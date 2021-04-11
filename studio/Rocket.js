"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    Rocket.prototype.sumMass = function (items) {
        var sumMassKg = 0;
        for (var i = 0; i < items.length; i++) {
            sumMassKg += items[i].massKg;
        }
        return sumMassKg;
    };
    Rocket.prototype.currentMassKg = function () {
        /*
        let sumAstronautsMassKg: number;
        let sumCargoMassKg: number;
        for (let i=0; i<this.astronauts.length; i++){
            sumAstronautsMassKg += this.astronauts[i].massKg;
        }

        for (let i=0; i<this.cargoItems.length; i++){
            sumCargoMassKg += this.cargoItems[i].massKg;
        }*/
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
