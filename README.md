# @iankco/kaco-react-form

### Install

npm

    npm install @iankco/kaco-react-form
  
yarn

    yarn add @iankco/kaco-react-form

### Quickstart

```jsx
import { useForm } from '@iankco/kaco-react-form';

function App() {
  const {
    data,
    formSet,
    formData,               // return new FormData generated
    formReset,              // function to reset form / data with default initial payload or new parameterized payload
  } = useForm({
    name: '',               // initial payload 
  }, {
    dynamicObject: false    // allow to append new object & value in data. default false
  })

  return (
    <input type="text" value={data.name} onChange={({ target }) => formSet('name', target.value)}  />
  );
}
```

### Can be used in React project like React JS, React Native, or etc.
