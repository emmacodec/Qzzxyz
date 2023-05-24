import { useState } from 'react';

const ShortCircuitOverview = () => {
  // false
  const [text, setText] = useState('')
  // true
  const [name, setName] = useState('grace')

const codeExample = text || 'hello world'
  return <div>
    <h4>false OR : {text || 'hello world'}</h4>
    <h4>false AND : {text && 'hello world'}</h4>
    <h4>true OR : {name || 'hello world'}</h4>
    <h4>true AND : {name && 'hello world'}</h4>
    {codeExample}
  </div>;
};
export default ShortCircuitOverview;
