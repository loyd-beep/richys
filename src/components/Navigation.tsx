import React, { useEffect, useState } from 'react';
interface NavigationProps {
  onNavigate: (sectionId: string) => void;
}
export function Navigation({
  onNavigate
}: NavigationProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setVisible(scrollPosition > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const sections = [{
    id: 'burgers',
    name: 'Burgers'
  }, {
    id: 'sandwiches',
    name: 'Sandwiches'
  }, {
    id: 'pizzas',
    name: 'Pizza'
  }, {
    id: 'desserts',
    name: 'Desserts'
  }, {
    id: 'drinks',
    name: 'Drinks'
  }, {
    id: 'addons',
    name: 'Add-ons'
  }, {
    id: 'offers',
    name: 'Offers'
  }];
  return <nav id="menu" className={`fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md transition-transform duration-300 border-b border-amber-900/30 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-amber-300 font-serif text-2xl font-bold">
            Richy's
          </div>
          <div className="hidden md:flex space-x-8">
            {sections.map(section => <button key={section.id} onClick={() => onNavigate(section.id)} className="text-amber-100 hover:text-amber-300 transition-colors text-sm uppercase tracking-wider">
                {section.name}
              </button>)}
          </div>
          <div className="md:hidden">
            <select onChange={e => onNavigate(e.target.value)} className="bg-black border border-amber-800 text-amber-300 rounded px-2 py-1">
              <option value="">Navigate to...</option>
              {sections.map(section => <option key={section.id} value={section.id}>
                  {section.name}
                </option>)}
            </select>
          </div>
        </div>
      </div>
    </nav>;
}