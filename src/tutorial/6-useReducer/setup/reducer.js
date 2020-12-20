const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        people: [...state.people, action.payload],
        isModalOpen: true,
        modalContent: 'Item added',
      };
    case 'NO_VALUE':
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'Please Enter Value',
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
      };
    case 'REMOVE_PERSON':
      return {
        ...state,
        people: state.people.filter((person) => person.id !== action.payload),
        isModalOpen: true,
        modalContent: 'Removed Successfully',
      };
    default:
      throw new Error('No matching action Type');
  }
};

export default reducer;
