import { RouterProvider } from 'react-router-dom';
import './App.css';

import { router } from './router/Router';

function App() {
//    const [isAuthenticated, setAuth] = React.useState<boolean>(false);
   return (
      <div className="App">
         <RouterProvider router={router} />
      </div>
   );
}

export default App;
