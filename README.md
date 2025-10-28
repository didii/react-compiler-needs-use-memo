# React compiler still needs useMemo

Simple showcase to why `useMemo` is not obsolete, dead or gone. Creating complex state such as an object or array still has to be wrapped in a `useMemo`, otherwise you'll still get more renders.

## Viewing this project

I've setup a [github pages](https://didii.github.io/react-compiler-needs-use-memo/) to view the result if you don't want
to run it yourself.

## Running this project

```bash
npm i
npm start
```

And open the printed URL in the browser of your choice.

