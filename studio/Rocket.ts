import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
 

export class Rocket
{    
    name: string;
    totalCapacityKg : number;
    
    cargoItems: Cargo[];
    astronauts: Astronaut[];

    constructor(name: string,totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg  = totalCapacityKg;
        this.cargoItems = [];        
        this.astronauts = [];
    }  

    sumMass( items: Payload[] ): number{
        let sumMassKg: number=0;
        for (let i=0; i<items.length; i++){
            sumMassKg += items[i].massKg;
        }
        return sumMassKg;
    }

    currentMassKg(): number{                
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
    }

    canAdd(item: Payload): boolean{
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg)
        {
            return true;
        }
        else{
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean{        
        if (this.canAdd(cargo))
        {
            this.cargoItems.push(cargo);
            return true;
        }
        else{
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean{
        if (this.canAdd(astronaut))
        {
            this.astronauts.push(astronaut);
            return true;
        }
        else{
            return false;
        }
    }
}
