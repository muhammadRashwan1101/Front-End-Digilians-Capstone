import { RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import { Router } from "./router/Router";
import AuthProvider from "./context/AuthProvider";
import ProductsProvider from "./context/ProductsProvider";
import CategoryProvider from "./context/categoryProvider";

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CategoryProvider>
          <RouterProvider router={Router} />
        </CategoryProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;
