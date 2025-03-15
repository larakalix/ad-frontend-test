import { create } from "zustand";

export type FilterStoreState = {
    filters: string[];
};

export const useFilterStore = create<FilterStoreState>()(() => ({
    filters: [],
}));
