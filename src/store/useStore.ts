import { create } from 'zustand/index';

const useStore = create(set => ({
    count: 0,
    addCount: () => set(
        (state: { count: number; }) =>
            ({ count: state.count + 1 })
    ),
    subtractCount: () => set(
        (state: { count: number; }) =>
            ({ count: state.count - 1 })
    ),
}));

export default useStore;