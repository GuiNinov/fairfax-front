import { pageDefs } from '../../defs/pageDefs';
import { Dispatch } from 'redux';
export const changeScreen = (payload: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: pageDefs.screen.change,
      payload,
    });
  };
};

export const selectCompany = (payload: any) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: pageDefs.home.select_company,
      payload,
    });
  };
};

export const openCompanyDetails = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: pageDefs.home.empresa_card.open,
    });
  };
};

export const closeCompanyDetails = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: pageDefs.home.empresa_card.close,
    });
  };
};

export const openAddCard = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: pageDefs.home.add_card.open,
    });
  };
};

export const closeAddCard = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: pageDefs.home.add_card.close,
    });
  };
};

export const openCartaoCnpj = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: pageDefs.home.cartao_cnpj.open,
    });
  };
};

export const closeCartaoCnpj = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: pageDefs.home.cartao_cnpj.close,
    });
  };
};
