import { create } from "zustand";

interface ILanguageStore {
    language: 'tr' | 'en';
    setIsChanged: () => void;
}

export const useLanguageStore = create<ILanguageStore>((set) => ({
    language: 'tr',
    setIsChanged: () => set((state) => ({
        language: state.language === 'tr' ? 'en' : 'tr',
    })),
}));
