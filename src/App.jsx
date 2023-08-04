import { useRoutes } from 'react-router-dom';
import { Home } from './pages';

function App() {
    const router = useRoutes([
        {
            path: '/',
            element: <Home />
        }
    ]);

    return router;
}

export default App;
