import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  theme: 'dark' | 'light';
}

// setters
interface Action {
  setTheme: (darkMode: State['theme']) => void;
}

interface Store extends State, Action {}

export const useAppStore = create(
  persist<Store>(
    (set, get, store) => ({
      // theme: undefined as any, // to give the system-preference theme a chance to load
      theme: 'light', // --------------------------------------------------------

      setTheme: (theme) => {
        set((state) => ({
          theme,
        }));
      },
    }),
    {
      name: 'app-store',
      getStorage: () => localStorage,
    }
  )
);
