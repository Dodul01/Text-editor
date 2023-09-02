const textFormat = document.getElementById('text-format');
const textColor = document.getElementById('text-color');

textFormat.addEventListener('click', ()=>{
  textarea.classList.toggle('capitalize');
  textFormat.classList.toggle('bg-blue-500');
  textFormat.classList.toggle('text-white');
})

textColor.addEventListener('change', ()=>{
  textarea.classList.toggle(`text-[${textColor.value}]`);
});