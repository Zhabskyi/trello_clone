import {
  GET_LISTS_ACTION_TYPE,
  LOADING_ACTION_TYPE,
  COUNT_CHANGE_ACTION_TYPE,
  SHOW_MODAL_ACTION_TYPE,
  GET_BOARD_LIST_ACTION_TYPE,
  SET_BOARD_NAME_ACTION_TYPE,
  SET_TOKEN_ACTION_TYPE,
  AUTHENTICATE_ACTION_TYPE,
  SET_BOARDS, SET_BOARD
} from './actionTypes';

const INITIAL_STATE = {
  clickCounts: 0,
  token: '',
  isShowModal: false,
  isAuthenticated: false,
  boardName: '',
  boardList: [],
  isLoading: true,
  lists: []
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case COUNT_CHANGE_ACTION_TYPE:
      return {...state, clickCounts: state.clickCounts + 1};
    case SET_TOKEN_ACTION_TYPE:
      return {...state, token: action.payload};
    case SHOW_MODAL_ACTION_TYPE:
      return {...state, isShowModal: !state.isShowModal};
    case AUTHENTICATE_ACTION_TYPE:
      return {...state, isAuthenticated: !state.isAuthenticated};
    case SET_BOARD_NAME_ACTION_TYPE:
      return {...state, boardName: action.payload};
    case GET_BOARD_LIST_ACTION_TYPE:
      return {...state, boardList: action.payload};
    case LOADING_ACTION_TYPE:
      return {...state, isLoading: !state.isLoading};
    case SET_BOARDS:
      return {...state, boardList: action.payload, isLoading: false};
    case SET_BOARD:
      return {...state, lists: action.payload, isLoading: false};
    default:
      return {...state};
  }
}
