export default function parseDate(date) {
  const today = new Date();

  const differenceMs = date - today;

  const seconds = Math.floor(differenceMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  let dateString = '';
  if (years > 0) {
      dateString += years === 1 ? '1 año' : `${years} años`;
  } else if (months > 0) {
      dateString += months === 1 ? '1 mes' : `${months} meses`;
  } else if (days > 0) {
      dateString += days === 1 ? '1 día' : `${days} días`;
  } 

  return `${dateString}`;
}