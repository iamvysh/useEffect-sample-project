import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component will unmount');
      // Perform any necessary cleanup actions here
    };
  }, []);

  return (
    <div>
      <div>My Component</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
  export default MyComponent