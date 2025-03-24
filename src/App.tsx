
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Technicians from "./components/Technicians/Technicians";
import Reports from "./components/Reports/Reports";
import Workflow from "./components/Workflow/Workflow";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pour les animations
import { LazyMotion, domAnimation } from "framer-motion";

const queryClient = new QueryClient();

// Simple auth check function
const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user).isAuthenticated : false;
};

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/login" />;
};

const App = () => (
  <LazyMotion features={domAnimation}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            {isAuthenticated() && <Header />}
            <main className="flex-grow">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/technicians" element={<ProtectedRoute><Technicians /></ProtectedRoute>} />
                <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
                <Route path="/workflow" element={<ProtectedRoute><Workflow /></ProtectedRoute>} />
                <Route path="/portfolio" element={<Portfolio />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            {isAuthenticated() && <Footer />}
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LazyMotion>
);

export default App;
