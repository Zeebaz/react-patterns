import { useState } from "react";

export const useTableSort = <T,>(
  intialData: T[]
): {
  data: T[];
  handleSort: (
    event: React.MouseEvent<HTMLTableCellElement, MouseEvent>
  ) => void;
} => {
  const [data, setData] = useState(intialData);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (
    event: React.MouseEvent<HTMLTableCellElement, MouseEvent>
  ) => {
    const { id } = event.currentTarget;

    const sortedData = [...data].sort((a, b) => {
      const aValue = a[id as keyof typeof a];
      const bValue = b[id as keyof typeof b];

      if (aValue < bValue) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });

    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return {
    data,
    handleSort,
  };
};
