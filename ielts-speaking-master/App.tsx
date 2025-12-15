import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopicContent } from './components/TopicContent';
import { TOPICS } from './data';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [currentTopicId, setCurrentTopicId] = useState<number>(19);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentTopic = TOPICS.find(t => t.id === currentTopicId) || TOPICS[0];

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden">
      <Sidebar 
        topics={TOPICS} 
        currentTopicId={currentTopicId} 
        onSelectTopic={(id) => setCurrentTopicId(id)}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col h-full w-full relative">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-10">
          <span className="font-bold text-lg text-gray-800">IELTS Master</span>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 scroll-smooth">
          <TopicContent topic={currentTopic} />
        </main>
      </div>
    </div>
  );
};

export default App;