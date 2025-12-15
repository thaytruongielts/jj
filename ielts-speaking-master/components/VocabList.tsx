import React from 'react';
import { VocabItem } from '../types';
import { AudioRecorder } from './AudioRecorder';

interface VocabListProps {
  items: VocabItem[];
  hideVietnamese: boolean;
}

export const VocabList: React.FC<VocabListProps> = ({ items, hideVietnamese }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="group bg-white p-4 rounded-xl border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
        >
          <div className="flex items-start justify-between mb-2">
            <div>
              <h4 className="font-bold text-gray-800 text-lg mr-2">{item.term}</h4>
            </div>
            {item.adjective && (
               <span className="bg-blue-50 text-blue-700 text-[10px] px-2 py-1 rounded-full uppercase tracking-wide font-semibold whitespace-nowrap">
                 Adj
               </span>
            )}
          </div>
          
          <div className="mb-3">
             <AudioRecorder label={`vocab_${item.term}`} />
          </div>

          <div className={`pt-3 border-t border-gray-100 transition-opacity duration-300 ${hideVietnamese ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
            <p className="text-gray-600 font-medium">{item.vietnamese}</p>
            {item.adjective && (
              <p className="text-xs text-gray-400 mt-1 italic">{item.adjective}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};