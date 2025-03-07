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

export { printDiv }