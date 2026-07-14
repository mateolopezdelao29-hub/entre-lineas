const MESES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

export function fechaLarga(d: Date): string {
  return `${d.getDate()} de ${MESES[d.getMonth()]} de ${d.getFullYear()}`;
}
export function fechaCorta(d: Date): string {
  return `${d.getDate()} ${MESES[d.getMonth()].slice(0,3)}`;
}
export function diasDesde(d: Date): string {
  const ms = Date.now() - d.getTime();
  const dias = Math.floor(ms / 86400000);
  if (dias <= 0) return 'Hoy';
  if (dias === 1) return 'Ayer';
  if (dias < 7)   return `${dias} días`;
  if (dias < 30)  return `${Math.floor(dias/7)} sem`;
  return fechaCorta(d);
}
