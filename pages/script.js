const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
themeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
});

// File upload functionality
const uploadBtn =  document.querySelector('#uploadBtn');
const fileInput = document.querySelector('#fileUpload');
const fileNameDisplay = document.querySelector('#fileName');
const fileInfoDiv = document.querySelector('#fileInfo');
const removeBtn = document.querySelector('#removeBtn');

uploadBtn.addEventListener("click", () => {
    fileInput.click(); // Trigger the file input click
});

fileInput.addEventListener("change", () => {
    if(fileInput.files.length > 0){
        const fileName = fileInput.files[0].name;
        fileNameDisplay.textContent = `Selected file: ${fileName}`;
        fileInfoDiv.classList.remove('hidden');
    }
});

removeBtn.addEventListener("click", () => {
    fileInput.value = "";
    fileNameDisplay.textContent = "";
    fileInfoDiv.classList.add('hidden'); 
});