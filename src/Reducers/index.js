const initialState = {
  showMenu: true,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, showMenu: !state.showMenu };
    default:
      return state;
  }
}
