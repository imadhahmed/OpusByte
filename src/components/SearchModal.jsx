import React, { useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';

export default function SearchModal({ isOpen, onClose }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Searching for: ' + inputRef.current?.value);
    onClose();
  };

  return (
    <div className={`search-modal-overlay ${isOpen ? 'active' : ''}`}>
      <div className="search-modal-box">
        <button 
          className="search-modal-close" 
          onClick={onClose}
          aria-label="Close Search"
        >
          <X size={32} />
        </button>

        <form onSubmit={handleSubmit} className="search-form-row">
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Type your search keyword..." 
            className="search-input-field"
          />
          <button type="submit" className="search-submit-btn" aria-label="Submit search">
            <Search size={28} />
          </button>
        </form>
      </div>
    </div>
  );
}

