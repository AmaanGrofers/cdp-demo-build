// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Disable retries for all queries
      refetchOnWindowFocus: false, // Disable refetch on window focus
    },
  },
});

createRoot(document.getElementById("root")).render(
  // <StrictMode> //? restrict double rendering
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  // </StrictMode>
);
