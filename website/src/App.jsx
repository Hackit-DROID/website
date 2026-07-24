import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import EventModal from './components/EventModal';
import WriteupModal from './components/WriteupModal';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Events from './pages/Events';
import Team from './pages/Team';
import Resources from './pages/Resources';

function App() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedWriteup, setSelectedWriteup] = useState(null);

  const handleOpenJoin = () => setIsJoinOpen(true);
  const handleCloseJoin = () => setIsJoinOpen(false);

  const handleOpenEvent = (eventData) => setSelectedEvent(eventData);
  const handleCloseEvent = () => setSelectedEvent(null);

  const handleOpenWriteup = (resourceData) => setSelectedWriteup(resourceData);
  const handleCloseWriteup = () => setSelectedWriteup(null);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-[#ffffff] font-sans antialiased">
        <Navbar onOpenJoin={handleOpenJoin} />

        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={<Home onOpenJoin={handleOpenJoin} onOpenEvent={handleOpenEvent} />} 
            />
            <Route 
              path="/events" 
              element={<Events onOpenEvent={handleOpenEvent} />} 
            />
            <Route 
              path="/team" 
              element={<Team onOpenJoin={handleOpenJoin} />} 
            />
            <Route 
              path="/resources" 
              element={<Resources onOpenWriteup={handleOpenWriteup} />} 
            />
            {/* Catch-all fallback route */}
            <Route 
              path="*" 
              element={<Home onOpenJoin={handleOpenJoin} onOpenEvent={handleOpenEvent} />} 
            />
          </Routes>
        </main>

        <Footer onOpenJoin={handleOpenJoin} />

        {/* Interactive Modals */}
        <JoinModal isOpen={isJoinOpen} onClose={handleCloseJoin} />
        <EventModal event={selectedEvent} isOpen={!!selectedEvent} onClose={handleCloseEvent} />
        <WriteupModal resource={selectedWriteup} isOpen={!!selectedWriteup} onClose={handleCloseWriteup} />
      </div>
    </Router>
  );
}

export default App;
