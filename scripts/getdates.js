// Set the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set the last modification date in the footer
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
  lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}
