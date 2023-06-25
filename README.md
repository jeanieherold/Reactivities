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

### some ts notes
- regarding objects - uses duck typing
- if it looks like a duck and walks like a duck - it is a duck 
- same props - same types - same object

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

#### bang operator can be used to override the ts errors --> ! 
- makeSound method is optional so --> 
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

## CORS Policy
#### - error - 
```
Access to XMLHttpRequest at 'http://localhost:5000/api/activities' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

Request URL:
http://localhost:5000/api/activities
Request Method:
GET
Status Code:
403 Forbidden
Referrer Policy:
strict-origin-when-cross-origin

```

- Need to send header back to the API saying this origin is allowed 
- Need to resolve this in our API

#### In the program.cs (startup file) 
- Add to Services the AddCors with options

```
// so we can make api calls from react server to our api server
builder.Services.AddCors(opt =>
{
    opt.AddPolicy("CorsPolicy", policy =>
    {
        policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
    });
});

// Add to the middleware section as well
// need CORS policy before Authorization
app.UseCors("CorsPolicy");
app.UseAuthorization();
app.MapControllers();

```
## <React.StrictMode>

```
// found in the index.tsx

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
- this will cause http calls to be made twice in development mode
- can cause some issues with some 3rd party libraries
- we will leave it on for now but when seeing an unexpected 2nd http call - this is a feature of react strict mode that is verifying all is ok with the call

## Semantic UI React

#### https://react.semantic-ui.com/

- npm install semantic-ui-react semantic-ui-css
- import in index.tsx - just before the index.css file

```
import 'semantic-ui-css/semantic.min.css'
import './index.css';
```

### Semantic UI will not work well with StrictMode 
- causes console error that we dont want to see all the time
```
Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of RefFindNode which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node
```

- so turning off strict more for this project

### the course is using Semantic UI and I will stick to that but for containers I am going to add bootstrap to make the app responsive

```
npm install bootstrap
// in the index.tsx file
import 'bootstrap/dist/css/bootstrap.css';
```