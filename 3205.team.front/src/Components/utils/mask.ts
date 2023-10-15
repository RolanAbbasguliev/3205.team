export function inputMask(input: string) {
  const x = input.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,2})/);
  const mask = !x ? '' : !x[2] ? x[1] : x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '');

  return mask;
}
