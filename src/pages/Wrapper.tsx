// src/components/Wrapper.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from '@/lib/redux/store';
import { persistor } from '@/lib/redux/persistor';

export function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
}
