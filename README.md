## REACT
#### npx create-react-app myapp --use-npm --template typescript

## Why Use Typescript
- Strong typing
- Object orientted
- Better intellisense
- Access modifiers
- Future JS Features
- Catches silly mistakes in dev
- 3rd Party libraries
- Easy to learn if you know JS
- Much improved in React

#### some annoyances of ts
- More upfront code
- 3rd Party libraries (some dont have ts definition files)
- Strict mode is... strict! (really is a good thing)

### somw ts notes
- regarding objects - uses duck typing
- if it looks like a duck and walks like a duck - it is a duck 
- same props - same types - same object

#### Some notes

```
// not same - methods are not the same
const duck1 = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}
const duck2 = {
    name: 'dewey',
    numLegs: 2,
    makeQuack: (sound: any) => console.log(sound)
}

// so set up interface for objects
export interface Duck {
    name: string;
    numLegs number;
    makeSound?: (sound: string) => void;
}

const duck1: Duck = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}
// this will cause ts error since makeQuack method is not in the Duck interface
const duck2: Duck = {
    name: 'dewey',
    numLegs: 2,
    makeQuack: (sound: any) => console.log(sound)
}
```

#### bang operator can be used to override the ts errors ! 
- makeSound method is options so --> 
```
// this will cause ts error since makeSound is possibly undefined (since optional)
duck1.makeSound('quack);

// using this bang operator (!) will override that ts error
duck1.makeSound!('quack);

// using the bang operator is not preferred - avoid if you can

export const ducks = [duck1, duck2];

```

## Array references
- map over array

```
const ducks = [duck1, duck2];

// use ducks.map(duck => ()) for creating html rendering much like *ngFor
{ducks.map(duck => (
    <div> key={duck.name}>
        <span>{duck.name}</span>
        <button> onClick={ () => duck.makeSound(duck.name + 'quack')}></button>
    </div>
))}
```

## Axios (instead of fetch)
- Make XMLHttpRequests from the browser
- Make http requests from node.js 
- Supports the Promise API
- Intercept request and response (Angular has this out of the box)
- Transform request and response data
- Cancel requests
- Automatic transforms for JSON data
- Automatic data object serialization to multipart/form-data and x-www-form-urlencoded body encodings
- Client side support for protecting against XSRF

