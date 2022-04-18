import React from 'react';

import { createRoot } from 'react-dom/client';

import { TodoApp } from './components/08-useReducer/TodoApp';

const divroot = document.getElementById('root');
const root = createRoot(divroot); // createRoot(container!) if you use TypeScript
root.render(<TodoApp tab="home" />);


// import { Padre } from './components/07-tarea-memo/Padre';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-Examples/MultipleCustomHooks';
// import { FocusScream } from './components/04-useRef/FocusScream';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { LayoutEffect } from './components/05-UseLayoutEffect/LayoutEffect';
// import { Memorize } from './components/06-memos/Memorize';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';

// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import {HookApp} from './HookApp';
// import {CounterApp}from './components/01-useState/CounterApp'
// <CounterWithCustomHook/>
// <HookApp />
// <CounterApp/>
/* <SimpleForm/> */

// ReactDOM.render(
    
//   <TodoApp/>,
//   document.getElementById('root')
// );