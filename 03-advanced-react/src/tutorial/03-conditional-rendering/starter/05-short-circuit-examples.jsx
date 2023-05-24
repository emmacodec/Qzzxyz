import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('vera');
  const [user, setUser] = useState({ name: 'kingsley' });
  const [isEditing, setIsEditing] = useState(false);

  return <div>
    <h2>{text || 'default value'}</h2>
    {!text && <div>
      <h2>whatever returns</h2>
      <h2>{name}</h2>
      </div>}
      {user && <someComponent name={user.name} />}
  </div>;
};

const someComponent = ({name}) => {
  return <div>
  <h2>{text || 'default value'}</h2>
  {!text && <div>
    <h2>whatever returns</h2>
    <h2>{name}</h2>
    </div>}
</div>;
}

export default ShortCircuitExamples;
