import { createStore } from 'redux';
import todoreducer from './reducer'; 
// FIX: default import use kiya

export const store = createStore(todoreducer);