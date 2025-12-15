import React from 'react';
import { Topic } from '../types';
import { BookOpen, GraduationCap, Trophy } from 'lucide-react';

interface SidebarProps {
  topics: Topic[];
  currentTopicId: number;
  onSelectTopic: (id: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ topics, currentTopicId, onSelectTopic, isOpen, onClose }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar Container */}
      <aside 
        className={`
          fixed top-0 left-0 z-30 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:h-screen flex flex-col
        `}
      >
        <div className="p-6 border-b border-gray-100 flex items-center space-x-2">
          <div className="bg-brand-600 p-1.5 rounded-lg">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-gray-800">IELTS Master</span>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Speaking Topics
          </div>
          <nav className="space-y-1 px-2">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => {
                  onSelectTopic(topic.id);
                  onClose(); // Close on mobile selection
                }}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors
                  ${currentTopicId === topic.id 
                    ? 'bg-brand-50 text-brand-700 border border-brand-100' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                `}
              >
                <div className={`p-1.5 rounded-md ${currentTopicId === topic.id ? 'bg-brand-100' : 'bg-gray-100'}`}>
                   <BookOpen className={`w-4 h-4 ${currentTopicId === topic.id ? 'text-brand-600' : 'text-gray-500'}`} />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span>Topic {topic.id}</span>
                  <span className="text-xs font-normal opacity-80 truncate w-32">{topic.title}</span>
                </div>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50">
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="font-medium">Pro Progress: 6/6</span>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-brand-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>
      </aside>
    </>
  );
};