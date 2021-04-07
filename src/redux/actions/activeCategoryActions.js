import { createAction } from '@reduxjs/toolkit';

const changeActiveCategory = createAction('activeCategory/change');
export default { changeActiveCategory };