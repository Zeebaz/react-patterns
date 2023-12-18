/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

interface GetColumnProps {
  onClick: (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void;
}

interface returnProps<T> {
  data: T[];
  handleSort: (
    event: React.MouseEvent<HTMLTableCellElement, MouseEvent>
  ) => void;
  getColumnProps: (customProps?: GetColumnProps) => {
    onClick: (
      event: React.MouseEvent<HTMLTableCellElement, MouseEvent>
    ) => void;
  };
}

export const useTableSortCustom = <T,>(intialData: T[]): returnProps<T> => {
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

  const callAll =
    (...fns: any[]) =>
    (...args: any) =>
      fns.forEach((fn) => fn && fn(...args));

  const getColumnProps = (customProps?: GetColumnProps) => {
    return {
      ...customProps,
      onClick: callAll(customProps?.onClick, handleSort),
    };
  };

  return {
    data,
    handleSort,
    getColumnProps,
  };
};
