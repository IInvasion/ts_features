import 'reflect-metadata';

@printMetadata
class Car {
  color: string = `black`;

  @markFunction(`BIG SECRET`)
  drive(): void {
    console.log(`I'm driving`);
  }
}

function markFunction(secretInfo: string) {
  return function (target: Car, key: string) {
    Reflect.defineMetadata(`info`, secretInfo, target, key);
  };
}

// Так можно связать какое-то количество информации с методом
// const info = Reflect.getMetadata(`info`, Car.prototype, `drive`);

// console.log(info);

// Немного более эффективный метод извлечения информации
function printMetadata(target: typeof Car) {
  for (let key of Object.getOwnPropertyNames(target.prototype)) {
    const info = Reflect.getMetadata(`info`, target.prototype, key);
    if (info) {
      console.log(info);
    }
  }
}

// Reflect.defineMetadata
// Reflect.getMetadata

// const box = {
//   color: `black`,
//   // note: `hello`,
// };

// Metadata for object

// Reflect.defineMetadata(`note`, `hello`, box);
// Reflect.defineMetadata(`width`, 30, box);

// // console.log(box);

// const note = Reflect.getMetadata(`note`, box);
// const width = Reflect.getMetadata(`width`, box);

// console.log(note, width);

// Metadata for object property

// Reflect.defineMetadata(`note`, `hello`, box, `color`);

// const note = Reflect.getMetadata(`note`, box, `color`);

// console.log(note);
