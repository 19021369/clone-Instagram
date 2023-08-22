import create from 'zustand'
import ITodo from './types/ITodo'
import createTodoSlice from './slices/todoSlice'
import IAuth from './types/IAuth'
import createAuthSlices from './slices/authSlice'

const useStore = create<ITodo & IAuth>()((...a) =>({
    ...createTodoSlice(...a),
    ...createAuthSlices(...a)
}))


export default useStore;