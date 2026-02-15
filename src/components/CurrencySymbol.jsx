import React from 'react';

/**
 * CurrencySymbol Component - Renders a premium Saudi Riyal SVG symbol.
 * This ensures the symbol displays correctly on all devices, especially mobile
 * browsers that don't support the newer Unicode Riyal Sign (U+20C1).
 */
const CurrencySymbol = ({ className = "w-[1em] h-[1em]", inline = true }) => {
    return (
        <span
            className={`inline-flex items-center ${inline ? 'font-bold ml-1' : ''} ${className}`}
            style={{ fontFamily: '"saudi_riyal", sans-serif' }}
        >
            ⃁
        </span>
    );
};

export default CurrencySymbol;
