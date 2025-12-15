import React, { useState, useRef } from 'react';
import { Mic, Square, Download, Trash2, Play, Pause } from 'lucide-react';

interface AudioRecorderProps {
  label: string;
}

export const AudioRecorder: React.FC<AudioRecorderProps> = ({ label }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        
        // Stop all tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Please allow microphone access to record your voice.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const downloadRecording = () => {
    if (audioUrl) {
      const a = document.createElement('a');
      a.href = audioUrl;
      // Sanitize filename
      const safeLabel = label.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      a.download = `ielts_practice_${safeLabel}.webm`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const deleteRecording = () => {
     if(audioUrl) {
       URL.revokeObjectURL(audioUrl);
     }
     setAudioUrl(null);
     setIsPlaying(false);
  };
  
  const togglePlayback = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
        audioRef.current.pause();
    } else {
        audioRef.current.play();
    }
    // State is handled by onPlay/onPause/onEnded events on the audio element
  };

  return (
    <div className="flex items-center space-x-1" onClick={(e) => e.stopPropagation()}>
        <audio 
            ref={audioRef} 
            src={audioUrl || ''} 
            onEnded={() => setIsPlaying(false)} 
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            className="hidden" 
        />
        
        {!audioUrl ? (
            !isRecording ? (
                <button 
                  onClick={startRecording} 
                  className="flex items-center space-x-1 px-3 py-1.5 bg-gray-100 hover:bg-brand-50 text-gray-600 hover:text-brand-600 rounded-full transition-colors text-xs font-medium"
                  title="Start Recording"
                >
                    <Mic className="w-3.5 h-3.5" />
                    <span>Record</span>
                </button>
            ) : (
                <button 
                  onClick={stopRecording} 
                  className="flex items-center space-x-1 px-3 py-1.5 bg-red-50 text-red-600 rounded-full animate-pulse transition-colors text-xs font-medium border border-red-100"
                  title="Stop Recording"
                >
                    <Square className="w-3.5 h-3.5" fill="currentColor" />
                    <span>Stop</span>
                </button>
            )
        ) : (
            <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-100">
                <button 
                  onClick={togglePlayback} 
                  className="p-1.5 text-brand-600 hover:bg-white rounded-full transition-colors focus:outline-none"
                  title={isPlaying ? "Pause" : "Play"}
                >
                    {isPlaying ? <Pause className="w-4 h-4" fill="currentColor" /> : <Play className="w-4 h-4" fill="currentColor" />}
                </button>
                <div className="w-px h-4 bg-gray-200 mx-1"></div>
                <button 
                  onClick={downloadRecording} 
                  className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-white rounded-full transition-colors focus:outline-none" 
                  title="Download"
                >
                    <Download className="w-4 h-4" />
                </button>
                <button 
                  onClick={deleteRecording} 
                  className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-white rounded-full transition-colors focus:outline-none" 
                  title="Delete & Retry"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>
        )}
    </div>
  );
};