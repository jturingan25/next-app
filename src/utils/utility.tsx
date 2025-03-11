import { format } from 'date-fns';

const formatValue = (type: any, value: any) => {
  if (!value) {
    return "-"
  }
  switch (type) {
    case "percent":
      return value + "%"
    case "currency":
      if (typeof value === "string") {
        const withoutCommas = value?.replace(/,/g, ''); // Remove commas
        value = parseFloat(withoutCommas); // Convert to float
      }
      return "₱" + Number(value).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    case "percent":
      return Number(value).toLocaleString()
    case "date":
      return format(value, 'MMM dd, yyyy hh:mm:ss a');
    default:
      return value
  }
}

const printDiv = (id: string) => {
  var content = document.getElementById(id)?.innerHTML;
  var originalContent = document.body.innerHTML;
  if (content) {
    // Modify the body to show only the content to print
    document.body.innerHTML = content;

    // Trigger the print dialog
    window.print();

    // Restore the original content after printing
    document.body.innerHTML = originalContent;
  }
  return
}

const downloadImage = (div_id: string) => {

}
export { printDiv, downloadImage, formatValue}