import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventModal from './components/EventModal';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import Events from './pages/Events';
import Team from './pages/Team';
import Community from './pages/Community';

function AnimatedRoutes({ onOpenEvent }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Home onOpenEvent={onOpenEvent} />
            </PageTransition>
          } 
        />
        <Route 
          path="/events" 
          element={
            <PageTransition>
              <Events onOpenEvent={onOpenEvent} />
            </PageTransition>
          } 
        />
        <Route 
          path="/team" 
          element={
            <PageTransition>
              <Team />
            </PageTransition>
          } 
        />
        <Route 
          path="/community" 
          element={
            <PageTransition>
              <Community />
            </PageTransition>
          } 
        />
        <Route 
          path="*" 
          element={
            <PageTransition>
              <Home onOpenEvent={onOpenEvent} />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOpenEvent = (eventData) => setSelectedEvent(eventData);
  const handleCloseEvent = () => setSelectedEvent(null);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background text-text-primary font-sans antialiased">
        <Navbar />

        <main className="flex-grow">
          <AnimatedRoutes onOpenEvent={handleOpenEvent} />
        </main>

        <Footer />

        {/* Event Detail Modal */}
        <EventModal event={selectedEvent} isOpen={!!selectedEvent} onClose={handleCloseEvent} />
      </div>
    </Router>
  );
}

export default App;
