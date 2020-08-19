import { v4 as uuid } from "uuid";

const bookReducer = (currState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...currState,
        { title: action.title, author: action.author, id: uuid() },
      ];
    case "DELETE_BOOK":
      return currState.filter((book) => book.id !== action.id);
    default:
      return currState;
  }
};

export default bookReducer;
