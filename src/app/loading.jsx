import React from "react";

const Loading = () => {
  return (
    // 'fixed inset-0' pura screen-ke cover korbe
    <div className="fixed inset-0 w-full h-screen flex flex-col items-center justify-center space-y-6 bg-background/50 backdrop-blur-sm z-50">
      
      {/* Container to ensure perfect centering */}
      <div className="flex flex-col items-center justify-center">
        
        {/* AI Glowing Circle Loader */}
        <div className="relative flex items-center justify-center mb-10">
          {/* Outer Glowing Ring */}
          <div className="absolute h-24 w-24 rounded-full border-t-4 border-b-4 border-primary animate-spin"></div>

          {/* Middle Pulsing Ring */}
          <div className="absolute h-16 w-16 rounded-full bg-primary/20 animate-ping"></div>

          {/* Center Core */}
          <div className="relative h-10 w-10 rounded-full bg-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.6)] flex items-center justify-center">
            <div className="h-4 w-4 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Loading; 