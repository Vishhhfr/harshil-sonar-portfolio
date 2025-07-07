
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-amber-400/20 rounded-3xl transform rotate-45 animate-pulse"></div>
      <div className="absolute top-1/4 right-20 w-24 h-24 bg-gradient-to-br from-amber-400/30 to-orange-400/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-emerald-300/25 to-teal-400/25 transform rotate-12 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-amber-300/20 to-yellow-400/20 rounded-2xl transform -rotate-12 animate-bounce delay-500"></div>
      
      {/* Animated lines */}
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-pulse"></div>
      <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent animate-pulse delay-1000"></div>
    </div>
  );
};

export default FloatingElements;
