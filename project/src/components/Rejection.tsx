import React from 'react';
import { HeartCrack } from 'lucide-react';

export function Rejection() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div style={{ fontFamily: 'Arial' }}>
        <HeartCrack size={48} />
        <div>Going to cry then ....</div>
      </div>
    </div>
  );
}