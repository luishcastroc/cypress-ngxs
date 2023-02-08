export interface AppStateModel {
  user: string;
  loading: boolean;
}

export const defaultState: AppStateModel = {
  user: 'Luis',
  loading: false,
};
