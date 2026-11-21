import React from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
        <button 
          className="video-modal-close" 
          onClick={onClose}
          aria-label="Close video"
        >
          <X size={32} />
        </button>
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
          title="Diligent Demo Video" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
      </div>
    </div>
  );
}

