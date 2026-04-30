import moment from 'jalali-moment';

moment.locale('fa');

export function formatJalali(input: Date | string, format = 'jYYYY/jMM/jDD'): string {
  return moment(input).locale('fa').format(format);
}

export function formatGregorianFromJalali(input: string, format = 'YYYY-MM-DD'): string {
  return moment.from(input, 'fa', 'jYYYY/jMM/jDD').format(format);
}
