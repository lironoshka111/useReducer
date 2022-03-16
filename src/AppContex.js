import React from 'react';
import { ShopProvider } from './ShopContext';
import {AppProvider} from './Counter';
import { combineComponents } from './combineComponents';
const providers = [
    AppProvider,
  ShopProvider,
]
export const AppContextProvider = combineComponents(...providers);