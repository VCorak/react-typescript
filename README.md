# React BOOKS TO READ app with Typescript

## What was the challenge?

* I have never used Typescript with React, just with Angular in one project and wanted to see what is all about and how can it help to better understand some React behaviours

### What is Typescript?

* a language build on top of JavaScript
* allows us to add type definitions - example: ``` let name:string = "valentina corak" ``` which tells us that this variable expects a value to be a string, not a number, not boolean... 
* it allows us to catch errors early in development
* serves as some kind of documentation, especially in some big projects with lots of components

### Some new expressions never seen before 🤔

``` typescript jsx
const List: React.FC<IProps>= ({ books }) => {
}
```

``` typescript jsx
const renderList = (): JSX.Element[] => {
}
```

``` typescript jsx
interface IProps {
books: Props["books"]
setBooks: React.Dispatch<React.SetStateAction<Props["books"]>>
}
```
 
These are some examples of syntax used in this project that I encounter for the first time. Syntax like *"React.FC"*, *React.Dispatch<React.SetStateAction<Props["books"]>*

To be continued...