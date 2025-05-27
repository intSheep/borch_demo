import {
    deserialize,
    serialize,
    field,
    vec,
    option
} from "@dao-xyz/borsh";

class SomeClass
{
    @field({type: 'u8'})
    x: number

    @field({type: 'u64'})
    y: number

    @field({type: 'string'})
    z: string

    @field({type: option(vec('u32'))})
    q?: number[]

    constructor(x: number, y: number, z: string)
    {
        this.x =  x;
        this.y=  y;
        this.z  =z;
    }
}


const value = new SomeClass(1,3,"a")

// Serialize
const serialized = serialize(value);
console.log(serialized);
// Deserialize
const deserialized = deserialize(serialized,SomeClass);
console.log(deserialized);