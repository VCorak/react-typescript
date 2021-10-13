# React BOOKS TO READ app with Typescript 🖨 📚 🧾

## What was the challenge?

* I have never used Typescript with React, just with Angular in one project and wanted to see what is all about and how can it help to better understand some React behaviours

### What is Typescript?

* a language build on top of JavaScript
* allows us to add type definitions - example: ``` let name:string = "valentina corak" ``` which tells us that this variable expects a value to be a string, not a number, not boolean... 
* it allows us to catch errors early in development
* serves as some kind of documentation, especially in some big projects with lots of components
* when we are passing props from some component, but we did not define them, Typescript will tell us with an error which is very useful

### Some new expressions never seen before 🤔

``` typescript jsx
const List: React.FC<IProps>= ({ books }) => {
}
```
* this actually says that this is of type React functional component, and it contains IProps as props. Before Typescript did not know what that was, it was just function returning some jsx...
It can also be written like this: const List = ({books}: IProps) => {}
  
``` typescript jsx
const renderList = (): JSX.Element[] => {
}
```
* defining what you want to return (not the void, not the array of nothing), in this case jsx elements and array of elements
``` typescript jsx
interface IProps {
books: Props["books"]
setBooks: React.Dispatch<React.SetStateAction<Props["books"]>>
}
```
* how to now what is setPeople, hoover over it in App.tsx, and it should show what type to set and just paste it to interface- this is shorter version which takes Props of "books", which is the same as IState because we are importing them

## Conclusion

At first, it seemed to me that I have a lot more of writing, defining things in code and like, I would now that this has to be string thing...but actually as project went on
I realized that Typescript is very useful, which showed especially in that part where I had to parseInt the number, because when you define the input.value to be number, 
it is actually a string, even if you put type=number, again it returns value of string. So here it comes power of Typescript that gives me the error and explanation right away, and I can figure that maybe I need to parse the string into integer. I actually remember
that in one React project I had the same issue and needed a lot of time figuring out what the problem is. So, win win for Typescript. I still have to get used to 
define all this types of React FC, JSX.Element, Dispatch and other, still seems a bit confusing but will try to use Typescript with ok, maybe not with every project
from now on but practice more with small ones just to get the grip of it.

#### This project is created with great help of this [YouTube!](https://www.youtube.com/watch?v=jrKcJxF0lAU&t=353s&ab_channel=LaithHarb) video crash course.

![](https://media.giphy.com/media/7jMVtv69xwW0E/giphy.gif)


#### Happy hacking 🌀!!


