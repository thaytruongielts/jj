import React, { useState } from 'react';
import { Topic, Section } from '../types';
import { VocabList } from './VocabList';
import { AudioRecorder } from './AudioRecorder';
import { Eye, EyeOff, BookOpen, Layers } from 'lucide-react';

interface TopicContentProps {
  topic: Topic;
}

export const TopicContent: React.FC<TopicContentProps> = ({ topic }) => {
  const [hideVietnamese, setHideVietnamese] = useState(false);
  const [activeTab, setActiveTab] = useState<'answer' | 'vocab'>('answer');

  const renderSection = (section: Section, idx: number) => {
    if (section.type === 'paragraph') {
      return (
        <div key={idx} className="mb-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
             <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Sample Answer Part {idx + 1}</h3>
             <AudioRecorder label={`sample_answer_${topic.id}_part_${idx + 1}`} />
          </div>
          <div className="prose max-w-none">
            {section.content?.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-800 leading-relaxed mb-4 text-lg">
                {para.split('**').map((part, j) => 
                  j % 2 === 1 ? <span key={j} className="font-bold text-brand-700">{part}</span> : part
                )}
              </p>
            ))}
          </div>
          
          <div className={`mt-6 pt-6 border-t border-dashed border-gray-200 transition-all duration-500 ease-in-out ${hideVietnamese ? 'blur-sm select-none hover:blur-none cursor-pointer' : ''}`}>
             <h4 className="text-xs font-bold text-gray-400 mb-2 uppercase">Vietnamese Translation</h4>
             <div className="prose max-w-none">
                {section.vietnameseContent?.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4 italic">
                    {para.split('**').map((part, j) => 
                      j % 2 === 1 ? <span key={j} className="font-bold">{part}</span> : part
                    )}
                  </p>
                ))}
             </div>
          </div>
        </div>
      );
    }

    if (section.type === 'points') {
      return (
        <div key={idx} className="space-y-4 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <Layers className="w-5 h-5 mr-2 text-brand-500" />
            Key Points & Arguments
          </h3>
          <div className="grid gap-4">
            {section.points?.map((point, pIdx) => (
              <div key={pIdx} className="bg-white p-5 rounded-xl border border-gray-200 hover:border-brand-200 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1 mr-4">
                    <div className="flex items-center space-x-2 mb-2">
                       <span className="bg-brand-100 text-brand-700 text-xs font-bold px-2 py-0.5 rounded-full">{pIdx + 1}</span>
                       <h4 className="font-bold text-gray-900">{point.title}</h4>
                    </div>
                    <p className="text-gray-800 mb-2">{point.english}</p>
                    
                    <div className={`transition-all duration-300 ${hideVietnamese ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
                      <p className="text-gray-600 italic text-sm border-l-2 border-brand-200 pl-3 py-1 bg-gray-50 rounded-r">
                        {point.vietnamese}
                      </p>
                    </div>

                    {point.adjective && !hideVietnamese && (
                      <div className="mt-3 flex items-center space-x-2 text-xs text-gray-500">
                         <span className="font-semibold text-gray-400">Related Adjectives:</span>
                         <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">{point.adjective}</span>
                      </div>
                    )}
                  </div>
                   <div className="flex-shrink-0 mt-1">
                     <AudioRecorder label={`point_${point.title}`} />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-brand-600 mb-2 font-medium">
          <span className="text-sm uppercase tracking-wide">Topic {topic.id}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{topic.question}</h1>
        <div className="flex items-center justify-between flex-wrap gap-4">
           <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <button 
                onClick={() => setActiveTab('answer')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'answer' ? 'bg-white text-brand-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Sample Answer
              </button>
              <button 
                onClick={() => setActiveTab('vocab')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'vocab' ? 'bg-white text-brand-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Vocabulary List
              </button>
           </div>
           
           <button 
             onClick={() => setHideVietnamese(!hideVietnamese)}
             className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${hideVietnamese ? 'bg-brand-50 border-brand-200 text-brand-700' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
           >
             {hideVietnamese ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
             <span>{hideVietnamese ? 'Study Mode On' : 'Study Mode Off'}</span>
           </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="transition-opacity duration-300 animate-in fade-in">
        {activeTab === 'answer' && (
          <div>
            {topic.sections.map((section, idx) => renderSection(section, idx))}
          </div>
        )}

        {activeTab === 'vocab' && (
          <div>
            <div className="flex items-center mb-6 p-4 bg-blue-50 text-blue-800 rounded-lg border border-blue-100">
               <BookOpen className="w-5 h-5 mr-3" />
               <p className="text-sm font-medium">Record yourself pronouncing these words and listen back to improve your accent.</p>
            </div>
            <VocabList items={topic.vocabulary} hideVietnamese={hideVietnamese} />
          </div>
        )}
      </div>
    </div>
  );
};