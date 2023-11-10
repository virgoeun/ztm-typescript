/* eslint-disable */
import { strict as assert } from "assert";

// Objects are a fundamental data type used to represent a collection of
// properties with their respective values. They are defined using either an
// object literal notation or a constructor notation.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html
 
type coordinate = {
x : number;
y: number;

};

const origin : coordinate = {
    x:0,
    y:0,
}

const xPosition = origin.x;
assert.equal(xPosition, 0)

const yPosition = origin.y;
assert.equal(yPosition, 0);

let coor: coordinate = {
    x: 10,
    y:20,

}

coor.x = 20;
coor.y = 30;

assert.deepEqual(coor, {x:20, y:30})

const threeThree = {x: 3, y:3};

function printCord(coor: coordinate) {
    console.log(coor.x, coor.y)
}


printCord(coor)
printCord({x:5, y:10})


// type inside type
type personName = string;

type Location = {
coord: coordinate;
name: personName;
}

let home = {
    coord: {x:0, y:10},
    name: 'Jason'
}

home.coord.x = 1;
const ypost = home.coord.y;