import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { LifeInsurance } from './pages/LifeInsurance';
import { HealthInsurance } from './pages/HealthInsurance';
import { TermInsurance } from './pages/TermInsurance';
import { PremiumCalculator } from './pages/PremiumCalculator';
import { Customers } from './pages/Customers';
import { Documents } from './pages/Documents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="life-insurance" element={<LifeInsurance />} />
          <Route path="health-insurance" element={<HealthInsurance />} />
          <Route path="term-insurance" element={<TermInsurance />} />
          <Route path="calculator" element={<PremiumCalculator />} />
          <Route path="customers" element={<Customers />} />
          <Route path="documents" element={<Documents />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
