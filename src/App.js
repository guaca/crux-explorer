import Routes from './routes/routes';
import Provider from './contexts/provider';
import { AuthContextProvider } from './contexts/authContextProvider';

const App = () =>
    <AuthContextProvider>
        <Provider>
            <Routes />
        </Provider>
    </AuthContextProvider>

export default App;