/*
 * Specifies the root component of the application
 */

import * as React from 'react';

import { Portal, PortalLocation } from './components/Portal';
import { Theme } from './Theme';

// Top-level React component in the application
// !!!! THIS ... IS ... NOT ... HTML !!!!
// IF YOU DIDN'T REALIZE THIS, PLEASE GO AND READ
// https://reactjs.org/docs/introducing-jsx.html
export const App = () => (
    <Theme>
        <Portal portalLocation={PortalLocation.SIDEBAR_TITLE}>Hello World!</Portal>
    </Theme>
);
