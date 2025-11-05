import React, { useState } from 'react';
import { SpinnerLoader } from './Loaders';

interface StatefulButtonProps {
  children: React.ReactNode;
  onClick: () => Promise<void>;
  className?: string;
}

export const StatefulButton: React.FC<StatefulButtonProps> = ({
  children,
  onClick,
  className = '',
}) => {
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleClick = async () => {
    setState('loading');
    try {
      await onClick();
      setState('success');
      setTimeout(() => setState('idle'), 2000);
    } catch (error) {
      console.error('Error:', error);
      setState('idle');
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={state !== 'idle'}
      className={`relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${className}`}
      style={{
        background:
          state === 'success'
            ? '#059669'
            : '#000000',
        color: '#ffffff',
        opacity: state === 'idle' ? 1 : 0.95,
        cursor: state === 'idle' ? 'pointer' : 'not-allowed',
      }}
    >
      {state === 'idle' && <span>{children}</span>}
      {state === 'loading' && (
        <div className="flex items-center justify-center gap-2">
          <SpinnerLoader />
          <span>Loading...</span>
        </div>
      )}
      {state === 'success' && <span>✓ Success!</span>}
    </button>
  );
};
