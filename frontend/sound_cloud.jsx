import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';

document.addEventListener("DOMContentLoaded", ()=> {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root );
});

// document.addEventListener('DOMContentLoaded', () => {
//     let store;
//     if (window.currentUser) {
//         const { currentUser } = window;
//         const { id } = currentUser;
//         const preloadedState = { 
//           entitities: {
//             users: {
//               [id]: currentUser
//             }
//           },
//           session: { id }
//           };
//         store = configureStore(preloadedState);
    
//         // Clean up after ourselves so we don't accidentally use the
//         // global currentUser instead of the one in the store
//         delete window.currentUser;
    
//       } else {
//         store = configureStore();
//       }
//     const root = document.getElementById('root')
//     ReactDOM.render(<Root store={store} />, root)
//     }
// )