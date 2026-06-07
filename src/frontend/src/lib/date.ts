export function toLocalISOString(date:Date): string {
  const pad = (num:any) => String(num).padStart(2, '0');
  
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  
  // getTimezoneOffset returns values in minutes with inverse signs
  const tzOffsetMinus = date.getTimezoneOffset();
  const offsetSign = tzOffsetMinus <= 0 ? '+' : '-';
  const absOffset = Math.abs(tzOffsetMinus);
  const offsetHours = pad(Math.floor(absOffset / 60));
  const offsetMinutes = pad(absOffset % 60);

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${offsetSign}${offsetHours}:${offsetMinutes}`;
}