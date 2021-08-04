// Top level App component
import React from 'react';
import { ProvideAuth } from './use-auth.js';
function App(props) {
  return (
    <ProvideAuth>
      {/*
        Route components here, depending on how your app is structured.
        If using Next.js this would be /pages/_app.js
      */}
    </ProvideAuth>
  );
}
// Any component that wants auth state