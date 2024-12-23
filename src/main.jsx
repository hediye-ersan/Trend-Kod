import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider, useDispatch } from 'react-redux';
import store from './Store/store';
import { checkAuthToken } from './actions/userAction';

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthToken());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </StrictMode>,
);
