import React from 'react';
import { AppProvider } from './providers/AppProvider';
import {AppRoutes} from './components/Routes';

const App = () => {
    return (
        <AppProvider>
            <AppRoutes />
        </AppProvider>
    );
};

export default App;