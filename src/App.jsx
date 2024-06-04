import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, ErrorPage } from '@pages';
import { createRoot } from 'react-dom/client';

const domRoot = createRoot(document.getElementById('App'));

domRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<MainPage />}
        />

        <Route
          path="/*"
          element={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
