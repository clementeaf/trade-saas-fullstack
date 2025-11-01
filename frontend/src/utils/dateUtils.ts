export function getLocalDateTimeString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function formatDisplayDateTime(dateTimeString: string): string {
  if (!dateTimeString) return '';
  const [datePart, timePart] = dateTimeString.split('T');
  if (!datePart || !timePart) return '';
  
  const [year, month, day] = datePart.split('-');
  const [hours, minutes] = timePart.split(':');
  
  return `${day}/${month}/${year}, ${hours}:${minutes}`;
}

