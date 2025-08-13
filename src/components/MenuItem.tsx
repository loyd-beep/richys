import React from 'react';
import { MenuItemType } from '../types/menu';
interface MenuItemProps {
  item: MenuItemType;
}
export function MenuItem({
  item
}: MenuItemProps) {
  return <div className="bg-zinc-900 rounded-md overflow-hidden border border-zinc-800 hover:border-amber-800 transition-all duration-300 group">
      {item.image && <div className="h-48 overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium text-white">{item.name}</h3>
          <div className="text-amber-300 font-bold">
            ${item.price.toFixed(2)}
          </div>
        </div>
        <p className="text-zinc-400 text-sm mb-3">{item.description}</p>
        {item.tags && item.tags.length > 0 && <div className="flex flex-wrap gap-2 mt-3">
            {item.tags.map(tag => <span key={tag} className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 rounded-full">
                {tag}
              </span>)}
          </div>}
      </div>
    </div>;
}