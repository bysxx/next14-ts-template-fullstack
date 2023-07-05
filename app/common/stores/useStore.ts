import create from 'zustand';

interface State {
  data: string | null;
  isData: () => boolean;
  setData: (data: string) => void;
}

export const useGlobalStore = create<State>((set, get) => ({
  data: null,
  isData: () => get().data !== null,
  setData: (data: string) => {
    set((_) => ({
      data,
    }));
  },
}));
