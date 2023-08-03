// src/store/reducer.js
const initialState = {
    formData: {
      email: '',
      password: '',
      address: '',
      address2: '',
    },
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_FORM_DATA':
        return {
          ...state,
          formData: {
            ...state.formData,
            ...action.payload,
          },
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  