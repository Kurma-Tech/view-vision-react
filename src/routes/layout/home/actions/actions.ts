import { createAction, ActionType } from 'typesafe-actions';

export const toggleSidebar = createAction('@LAYOUT/TOGGLE_SIDEBAR')();
export const toggleSnackBar = createAction('@LAYOUT/TOGGLE_SNACKBAR')();
// export const toggleSidebar = createAction('@LAYOUT/TOGGLE_SIDEBAR', (sidbarOpened: boolean) => sidbarOpened)<boolean>();
export type layoutTypes = ActionType<typeof toggleSidebar | typeof toggleSnackBar>;
