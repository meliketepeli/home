import React from 'react';
import { AppProvider } from './providers/AppProvider';
import {AppRoutes} from './components/Routes';
import styled from 'styled-components';
import GlobalStyleProvider from './providers/GlobalStyleProvider';

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const App = () => {
    return (
        <StyledApp>
            <AppProvider>
                <AppRoutes />
        </AppProvider>
        <GlobalStyleProvider/>
        </StyledApp>
    );
};

export default App;