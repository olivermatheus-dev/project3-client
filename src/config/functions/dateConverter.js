export function dateConverter(date) {
  const data = new Date(date);
  const options = { timeZone: "UTC", dateStyle: "full", timeStyle: "medium" };
  const dataFormatada = data.toLocaleDateString();
  return dataFormatada;
}
