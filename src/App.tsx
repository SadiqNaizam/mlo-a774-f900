import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import AnalyticsReports from "./pages/AnalyticsReports";
import CustomerDatabase from "./pages/CustomerDatabase";
import DashboardOverview from "./pages/DashboardOverview";
import OrdersManagement from "./pages/OrdersManagement";
import ProductsList from "./pages/ProductsList";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>


          <Route path="/" element={<DashboardOverview />} />
          <Route path="/analytics-reports" element={<AnalyticsReports />} />
          <Route path="/customer-database" element={<CustomerDatabase />} />
          <Route path="/orders-management" element={<OrdersManagement />} />
          <Route path="/products-list" element={<ProductsList />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
