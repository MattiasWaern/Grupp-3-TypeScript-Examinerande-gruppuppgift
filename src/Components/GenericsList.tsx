import type { ReactNode } from "react";

type GenericListProps<T extends { id: string; }> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

function GenericList<T extends { id: string; }>({
  items,
  renderItem,
}: GenericListProps<T>) {
  return (
    <div className="car-list">
      {items.map((item) => (
        <div key={item.id}>
          {renderItem(item)}
          </div>))}
    </div>
  );
}

export default GenericList