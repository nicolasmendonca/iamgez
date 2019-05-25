import numeral from 'numeral';

export const formatFileSize = (size: number) => numeral(size).format('0b');
export const formatPercentage = (percentage: number) =>
  numeral(percentage).format('0.00%');
