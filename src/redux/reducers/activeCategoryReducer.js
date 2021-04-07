import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions/activeCategoryActions';
const activeCategory = createReducer('', {
    [actions.changeActiveCategory]:(_, { payload }) => payload,
})

export default activeCategory;