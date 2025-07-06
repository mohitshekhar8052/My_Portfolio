const FloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-bounce delay-0"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent/20 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/30 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute bottom-20 right-40 w-5 h-5 bg-accent/30 rounded-full animate-bounce delay-500"></div>
      
      {/* Floating code symbols */}
      <div className="absolute top-1/3 left-5 text-2xl text-primary/10 animate-pulse delay-0">&lt;/&gt;</div>
      <div className="absolute top-2/3 right-10 text-xl text-accent/10 animate-pulse delay-1000">{"{}"}</div>
      <div className="absolute bottom-1/3 left-1/4 text-lg text-primary/10 animate-pulse delay-2000">[ ]</div>
      
      {/* Moving gradient orbs */}
      <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-gradient-to-l from-accent/5 to-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  );
};

export default FloatingElements;