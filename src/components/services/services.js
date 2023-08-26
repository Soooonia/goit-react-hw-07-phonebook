export const handlePending = state => {
    state.contacts.isLoading = true;
  };
  
  export const handleFulfilled = (state) => {
    state.contacts.isLoading = false;
    state.contacts.error = '';
  };
  
  export const handleFulfilledGet = ( state, { payload }) => {
    state.contacts.items = payload;
  };
  
  export const handleFulfilledAdd = (state, { payload }) => {
    state.contacts.items.push(payload);
  };
  
  export const handleFulfilledDelete = (state, { payload }) => {
    state.contacts.items = state.contacts.items.filter(
      el => el.id !== payload.id
    );
  };
  
  export const handleRejected = (state, { payload }) => {
    state.contacts.isLoading = false;
    state.contacts.error = payload;
  };