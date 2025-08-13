import React from 'react';
import { MenuItem } from './MenuItem';
import { MenuItemType } from '../types/menu';
interface MenuSectionProps {
  title: string;
  items: MenuItemType[];
}
export function MenuSection({
  title,
  items
}: MenuSectionProps) {
  return <section className="mb-16">
      <h2 className="text-4xl font-serif mb-8 text-amber-300 border-b border-amber-800/50 pb-3">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map(item => <MenuItem key={item.id} item={item} />)}
      </div>
    </section>;
}