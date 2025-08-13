import React from 'react';
export function Header() {
  return <div className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=2070')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-4 tracking-tight text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
            Richy's
          </span>
        </h1>
        <p className="text-amber-200 text-xl md:text-2xl font-light tracking-widest uppercase">
          Premium Fast Food Since 2004
        </p>
        <div className="mt-12">
          <a href="#menu" className="inline-block border border-amber-300 text-amber-300 px-8 py-3 rounded-sm hover:bg-amber-300 hover:text-black transition duration-300" onClick={e => {
          e.preventDefault();
          document.getElementById('menu')?.scrollIntoView({
            behavior: 'smooth'
          });
        }}>
            View Menu
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>;
}