import { RouterProvider } from 'react-router-dom';
import './App.css';

import { router } from './app/providers/router/Router';

function App() {
//    const [isAuthenticated, setAuth] = React.useState<boolean>(false);
   return (
      <div className="App">
         <RouterProvider router={router} />
      </div>
   );
}

export default App;
