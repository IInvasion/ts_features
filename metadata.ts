import 'reflect-metadata';

// Reflect.defineMetadata
// Reflect.getMetadata

const box = {
  color: `black`,
  // note: `hello`,
};

// Metadata for object

// Reflect.defineMetadata(`note`, `hello`, box);
// Reflect.defineMetadata(`width`, 30, box);

// // console.log(box);

// const note = Reflect.getMetadata(`note`, box);
// const width = Reflect.getMetadata(`width`, box);

// console.log(note, width);

// Metadata for object property

Reflect.defineMetadata(`note`, `hello`, box, `color`);

const note = Reflect.getMetadata(`note`, box, `color`);

console.log(note);
