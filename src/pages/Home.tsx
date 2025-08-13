import React, { useRef } from 'react';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { MenuSection } from '../components/MenuSection';
import { burgers, sandwiches, pizzas, desserts, drinks, addOns, offers } from '../data/menuItems';
export function Home() {
  const sectionsRef = useRef<{
    [key: string]: HTMLDivElement | null;
  }>({});
  const scrollToSection = (sectionId: string) => {
    sectionsRef.current[sectionId]?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="bg-black text-white min-h-screen w-full">
      <Header />
      <Navigation onNavigate={scrollToSection} />
      <div className="container mx-auto px-4 pb-20">
        <div ref={el => sectionsRef.current['burgers'] = el} className="pt-24">
          <MenuSection title="Burgers" items={burgers} />
        </div>
        <div ref={el => sectionsRef.current['sandwiches'] = el} className="pt-24">
          <MenuSection title="Sandwiches" items={sandwiches} />
        </div>
        <div ref={el => sectionsRef.current['pizzas'] = el} className="pt-24">
          <MenuSection title="Pizza" items={pizzas} />
        </div>
        <div ref={el => sectionsRef.current['desserts'] = el} className="pt-24">
          <MenuSection title="Desserts" items={desserts} />
        </div>
        <div ref={el => sectionsRef.current['drinks'] = el} className="pt-24">
          <MenuSection title="Drinks" items={drinks} />
        </div>
        <div ref={el => sectionsRef.current['addons'] = el} className="pt-24">
          <MenuSection title="Add-ons" items={addOns} />
        </div>
        <div ref={el => sectionsRef.current['offers'] = el} className="pt-24 pb-24">
          <MenuSection title="Special Offers" items={offers} />
        </div>
      </div>
    </div>;
}