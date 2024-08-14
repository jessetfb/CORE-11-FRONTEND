import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components directly
import Home from './Pages/HomePage';
import LandingPage from './Pages/LandingPage';
import Register from './components/Registration';
import HashtagPage from './components/HashtagPage';
import AdminDashboard from './Pages/Dashboard/AdminDashboard';
import Core from './components/Core';
import Corepage from './components/Corepage';
import ProtectedRoute from './components/ProtectedRoute';

// Import views and components directly for routes
;import Collapses from './Pages/Dashboard/views/base/collapses/Collapses';
import Colors from './Pages/Dashboard/views/theme/colors/Colors';
import Typography from './Pages/Dashboard/views/theme/typography/Typography';
import Accordion from './Pages/Dashboard/views/base/accordion/Accordion';
import Breadcrumbs from './Pages/Dashboard/views/base/breadcrumbs/Breadcrumbs';
import Cards from './Pages/Dashboard/views/base/cards/Cards';
import Carousels from './Pages/Dashboard/views/base/carousels/Carousels';
import ListGroups from './Pages/Dashboard/views/base/list-groups/ListGroups';
import Navs from './Pages/Dashboard/views/base/navs/Navs';
import Paginations from './Pages/Dashboard/views/base/paginations/Paginations';
import Placeholders from './Pages/Dashboard/views/base/placeholders/Placeholders';
import Popovers from './Pages/Dashboard/views/base/popovers/Popovers';
import Progress from './Pages/Dashboard/views/base/progress/Progress';
import Spinners from './Pages/Dashboard/views/base/spinners/Spinners';
import Tabs from './Pages/Dashboard/views/base/tabs/Tabs';
import Tables from './Pages/Dashboard/views/base/tables/Tables';
import Tooltips from './Pages/Dashboard/views/base/tooltips/Tooltips';
import Buttons from './Pages/Dashboard/views/buttons/buttons/Buttons';
import ButtonGroups from './Pages/Dashboard/views/buttons/button-groups/ButtonGroups';
import Dropdowns from './Pages/Dashboard/views/buttons/dropdowns/Dropdowns';
import ChecksRadios from './Pages/Dashboard/views/forms/checks-radios/ChecksRadios';
import FloatingLabels from './Pages/Dashboard/views/forms/floating-labels/FloatingLabels';
import FormControl from './Pages/Dashboard/views/forms/form-control/FormControl';
import InputGroup from './Pages/Dashboard/views/forms/input-group/InputGroup';
import Layout from './Pages/Dashboard/views/forms/layout/Layout';
import Range from './Pages/Dashboard/views/forms/range/Range';
import Select from './Pages/Dashboard/views/forms/select/Select';
import Validation from './Pages/Dashboard/views/forms/validation/Validation';
import Charts from './Pages/Dashboard/views/charts/Charts';
import CoreUIIcons from './Pages/Dashboard/views/icons/coreui-icons/CoreUIIcons';
import Flags from './Pages/Dashboard/views/icons/flags/Flags';
import Brands from './Pages/Dashboard/views/icons/brands/Brands';
import Alerts from './Pages/Dashboard/views/notifications/alerts/Alerts';
import Badges from './Pages/Dashboard/views/notifications/badges/Badges';
import Modals from './Pages/Dashboard/views/notifications/modals/Modals';
import Toasts from './Pages/Dashboard/views/notifications/toasts/Toasts';
import Widgets from './Pages/Dashboard/views/widgets/Widgets';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hashtag/:tag"
          element={
            <ProtectedRoute>
              <HashtagPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        
        {/* Admin Dashboard Route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Core Components Routes */}
        <Route
          path="/core"
          element={
            <ProtectedRoute>
              <Core />
            </ProtectedRoute>
          }
        />
        <Route
          path="/core/:id"
          element={
            <ProtectedRoute>
              <Corepage />
            </ProtectedRoute>
          }
        />

        {/* View Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/theme" element={<Colors />} />
        <Route path="/theme/colors" element={<Colors />} />
        <Route path="/theme/typography" element={<Typography />} />
        <Route path="/base" element={<Cards />} />
        <Route path="/base/accordion" element={<Accordion />} />
        <Route path="/base/breadcrumbs" element={<Breadcrumbs />} />
        <Route path="/base/cards" element={<Cards />} />
        <Route path="/base/carousels" element={<Carousels />} />
        <Route path="/base/collapses" element={<Collapses />} />
        <Route path="/base/list-groups" element={<ListGroups />} />
        <Route path="/base/navs" element={<Navs />} />
        <Route path="/base/paginations" element={<Paginations />} />
        <Route path="/base/placeholders" element={<Placeholders />} />
        <Route path="/base/popovers" element={<Popovers />} />
        <Route path="/base/progress" element={<Progress />} />
        <Route path="/base/spinners" element={<Spinners />} />
        <Route path="/base/tabs" element={<Tabs />} />
        <Route path="/base/tables" element={<Tables />} />
        <Route path="/base/tooltips" element={<Tooltips />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/buttons/buttons" element={<Buttons />} />
        <Route path="/buttons/dropdowns" element={<Dropdowns />} />
        <Route path="/buttons/button-groups" element={<ButtonGroups />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/forms" element={<FormControl />} />
        <Route path="/forms/form-control" element={<FormControl />} />
        <Route path="/forms/select" element={<Select />} />
        <Route path="/forms/checks-radios" element={<ChecksRadios />} />
        <Route path="/forms/range" element={<Range />} />
        <Route path="/forms/input-group" element={<InputGroup />} />
        <Route path="/forms/floating-labels" element={<FloatingLabels />} />
        <Route path="/forms/layout" element={<Layout />} />
        <Route path="/forms/validation" element={<Validation />} />
        <Route path="/icons" element={<CoreUIIcons />} />
        <Route path="/icons/coreui-icons" element={<CoreUIIcons />} />
        <Route path="/icons/flags" element={<Flags />} />
        <Route path="/icons/brands" element={<Brands />} />
        <Route path="/notifications" element={<Alerts />} />
        <Route path="/notifications/alerts" element={<Alerts />} />
        <Route path="/notifications/badges" element={<Badges />} />
        <Route path="/notifications/modals" element={<Modals />} />
        <Route path="/notifications/toasts" element={<Toasts />} />
        <Route path="/widgets" element={<Widgets />} />

        {/* Add more protected routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
