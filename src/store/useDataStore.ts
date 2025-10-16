import { create } from 'zustand';

interface DataItem {
  id: string;
  [key: string]: any;
}

interface DataState {
  data: DataItem[];
  selectedItem: DataItem | null;
  setData: (data: DataItem[]) => void;
  addItem: (item: DataItem) => void;
  updateItem: (id: string, updates: Partial<DataItem>) => void;
  deleteItem: (id: string) => void;
  setSelectedItem: (item: DataItem | null) => void;
}

export const useDataStore = create<DataState>((set) => ({
  data: [],
  selectedItem: null,
  setData: (data) => set({ data }),
  addItem: (item) => set((state) => ({ data: [...state.data, item] })),
  updateItem: (id, updates) =>
    set((state) => ({
      data: state.data.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      ),
    })),
  deleteItem: (id) =>
    set((state) => ({
      data: state.data.filter((item) => item.id !== id),
    })),
  setSelectedItem: (item) => set({ selectedItem: item }),
}));
