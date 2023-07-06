

import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Effect function
    console.log('Component mounted');

    // Cleanup function
    return () => {
      console.log('Component will unmount');
      // Perform any cleanup actions here, such as unsubscribing or canceling timers.
    };
  }, []); // Empty dependency array means the effect runs only once on mount

  return <div>My Component</div>;
}

export default MyComponent;