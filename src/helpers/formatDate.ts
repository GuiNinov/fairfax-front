export const formatDate = (date: any, mode = 0) => {
  date = new Date(date);
  let day: any = '0';
  switch (mode) {
    case 1:
      day = date.getDate().toString();
      break;

    default:
      day = (date.getDate() + 1).toString();
      break;
  }
  if (day.length == 1) day = '0' + day;

  let month: any = (date.getMonth() + 1).toString();
  if (month.length == 1) month = '0' + month;

  const year: any = date.getFullYear();
  if (day == 32) {
    day = '01';
    month = (Number(month) + 1).toString();
    if (month.length == 1) month = '0' + month;
  }
  const endDate = day + '/' + month + '/' + year;

  return endDate;
};

export const formatPrice = (price: string) => {
  if (price.split('.')) {
    if (price.split('.').length == 1) {
      price = price + '.00';
    }
  }

  return Number(price).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export const handlePhase = (phase: number) => {
  switch (phase) {
    case 0:
      return 'Interessadas';
    case 1:
      return 'Solicitar dados';
    case 2:
      return 'Analisar dados';
    case 3:
      return 'Enviar cotação';
    default:
      break;
  }
};

export const handleNextPhase = (phase: number) => {
  switch (phase) {
    case 0:
      return 'Solicitar dados';
    case 1:
      return 'Analisar dados';
    case 2:
      return 'Enviar cotação';

    default:
      break;
  }
};
