 import React from 'react';
 import { Provider as StoreProvider } from 'react-redux';
import AppContainer from './src/app/AppContainer';
 import store from './src/store/store';

 const App = () => {

   return (
     <StoreProvider store={store}>
       <AppContainer/>
     </StoreProvider>
   );
 };

 export default App;
