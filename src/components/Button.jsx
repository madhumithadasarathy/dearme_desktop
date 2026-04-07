import React from 'react';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = "px-5 py-2.5 rounded-xl transition-all duration-200 font-medium focus:outline-none flex items-center justify-center font-sans tracking-wide";
  const variants = {
    primary: "bg-dusty-rose text-white hover:bg-burgundy hover:text-blush-pink shadow-sm",
    secondary: "bg-white border-2 border-blush-pink text-burgundy hover:bg-blush-pink hover:border-dusty-rose",
    icon: "p-2 rounded-full hover:bg-blush-pink text-dusty-rose transition-colors"
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
