import React, { FC, useCallback, useState } from 'react';
/* @ts-ignore */
import { Alert } from 'moduleRemote';

const App: FC<Record<string, never>> = () => {
  const [ isAlertExists, setIsAlertExist ] = useState<boolean>(true);
  const handleAlertDismiss = useCallback(() => {
    setIsAlertExist(false);
    setTimeout(() => setIsAlertExist(true), 1000);
  }, []);
  return (
    <React.StrictMode>
      <div className="container">
        <h1>Host App</h1>
        {isAlertExists && (
          <Alert
            variant='success'
            onDismiss={handleAlertDismiss}
            style={{
              boxShadow: '4px 3px 2px rgba(0,0,0,.1)',
            }}
          >
            Success
          </Alert>
        )}
      </div>
    </React.StrictMode>
  );
};

export default App;