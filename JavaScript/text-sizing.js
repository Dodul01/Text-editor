const textarea = document.getElementById('textarea');

const boldBtn = document.getElementById('bold');
const italicBtn = document.getElementById('italic');
const underlineBtn = document.getElementById('underline');

const fontSizeInput = document.getElementById('font-size-input');


boldBtn.addEventListener('click', ()=>{
  boldBtn.classList.toggle('bg-blue-500');
  boldBtn.classList.toggle('text-white');
  textarea.classList.toggle('font-bold')
});

italicBtn.addEventListener('click', ()=>{
  italicBtn.classList.toggle('bg-blue-500');
  italicBtn.classList.toggle('text-white');
  textarea.classList.toggle('italic')
})

underlineBtn.addEventListener('click', ()=>{
  underlineBtn.classList.toggle('bg-blue-500');
  underlineBtn.classList.toggle('text-white');
  textarea.classList.toggle('underline');
})

fontSizeInput.addEventListener('change', (e)=>{
  textarea.classList.add(`text-[${e.target.value}px]`);
})