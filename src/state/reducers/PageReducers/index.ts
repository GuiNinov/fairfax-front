import { pageDefs } from '../../defs/pageDefs';

const initialState = {
  screen: 0,
  company_details: false,
  selected_company: {},
  add_card: false,
};

const pageReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case pageDefs.screen.change:
      return { ...state, screen: action.payload };
    case pageDefs.home.empresa_card.open: {
      return { ...state, company_details: true };
    }
    case pageDefs.home.empresa_card.close: {
      return { ...state, company_details: false };
    }
    case pageDefs.home.select_company: {
      return { ...state, selected_company: action.payload };
    }
    case pageDefs.home.add_card.open: {
      return { ...state, add_card: true };
    }
    case pageDefs.home.add_card.close: {
      return { ...state, add_card: false };
    }
    default:
      return state;
  }
};

export default pageReducer;
