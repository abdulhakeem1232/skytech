import React from 'react';

/**
 * CurrencySymbol Component - Renders a premium Saudi Riyal SVG symbol.
 * This ensures the symbol displays correctly on all devices, especially mobile
 * browsers that don't support the newer Unicode Riyal Sign (U+20C1).
 */
const CurrencySymbol = ({ className = "w-[1.2em] h-[1.2em]", inline = true }) => {
    return (
        <span className={`inline-flex items-center ${inline ? 'ml-0.5' : ''} ${className}`} aria-label="Saudi Riyal" role="img">
            <svg viewBox="0 0 40 40" fill="currentColor" className="w-full h-full">
                {/* SVG Path representing the stylized U+20C1 Riyal Symbol */}
                <path d="M32.5,10.5 c-1.5,0 -2.8,1.2 -2.8,2.8 c0,0.5 0.1,0.9 0.4,1.3 l-4.5,4.5 c-0.4,-0.3 -0.8,-0.4 -1.3,-0.4 c-1.2,0 -2.2,0.8 -2.6,1.9 l-4.1,-1.2 c0,-0.2 0,-0.4 0,-0.6 c0,-1.5 -1.2,-2.8 -2.8,-2.8 s-2.8,1.2 -2.8,2.8 c0,1.3 0.9,2.3 2.1,2.7 l1.2,5.2 c-0.8,0.4 -1.3,1.2 -1.3,2.2 c0,1.5 1.2,2.8 2.8,2.8 s2.8,-1.2 2.8,-2.8 c0,-0.5 -0.1,-0.9 -0.4,-1.3 l4.5,-4.5 c0.4,0.3 0.8,0.4 1.3,0.4 c1.2,0 2.2,-0.8 2.6,-1.9 l4.1,1.2 c0,0.2 0,0.4 0,0.6 c0,1.5 1.2,2.8 2.8,2.8 s2.8,-1.2 2.8,-2.8 S34,10.5 32.5,10.5 z M14.8,20.2 c-0.7,0 -1.2,-0.5 -1.2,-1.2 s0.5,-1.2 1.2,-1.2 s1.2,0.5 1.2,1.2 S15.5,20.2 14.8,20.2 z M20.4,28.8 c-0.7,0 -1.2,-0.5 -1.2,-1.2 s0.5,-1.2 1.2,-1.2 s1.2,0.5 1.2,1.2 S21.1,28.8 20.4,28.8 z M25.2,19.8 c-0.7,0 -1.2,-0.5 -1.2,-1.2 s0.5,-1.2 1.2,-1.2 s1.2,0.5 1.2,1.2 S25.9,19.8 25.2,19.8 z M32.5,26.5 c-0.7,0 -1.2,-0.5 -1.2,-1.2 s0.5,-1.2 1.2,-1.2 c0.7,0 1.2,0.5 1.2,1.2 S33.2,26.5 32.5,26.5 z M32.5,14.5 c-0.7,0 -1.2,-0.5 -1.2,-1.2 c0,-0.7 0.5,-1.2 1.2,-1.2 c0.7,0 1.2,0.5 1.2,1.2 C33.7,14,33.2,14.5 32.5,14.5 z" />
            </svg>
        </span>
    );
};

export default CurrencySymbol;
