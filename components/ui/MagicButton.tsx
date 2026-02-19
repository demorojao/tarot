import React from 'react';

interface MagicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    icon?: React.ReactNode;
    children: React.ReactNode;
}

export const MagicButton: React.FC<MagicButtonProps> = ({
    variant = 'primary',
    icon,
    children,
    className = '',
    ...props
}) => {

    const baseStyles = "glass-button group relative px-6 py-3 rounded-xl font-serif font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 transition-all duration-300";

    const variants = {
        primary: "bg-amber-600/80 hover:bg-amber-500/90 text-white shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] border border-amber-500/50",
        secondary: "bg-slate-800/60 hover:bg-slate-700/80 text-indigo-200 hover:text-white border border-indigo-500/30 hover:border-indigo-400/60 backdrop-blur-md",
        ghost: "bg-transparent hover:bg-white/5 text-slate-400 hover:text-amber-200 border border-transparent hover:border-white/10"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {/* Glossy reflection effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Icon */}
            {icon && <span className="text-lg group-hover:scale-110 transition-transform duration-300">{icon}</span>}

            {/* Text */}
            <span className="relative z-10 group-hover:tracking-[0.15em] transition-all duration-300">
                {children}
            </span>
        </button>
    );
};
