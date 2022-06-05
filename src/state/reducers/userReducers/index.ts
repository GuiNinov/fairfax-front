const initialState = {
  data: {
    name: 'Akira, o Subscritor',
    first_name: 'Akira',
    complement: 'o Subscritor',
    photo: './avatar.svg',
  },
};

const userReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
