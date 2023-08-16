const alignLeft = document.getElementById('align-left');
const alignCenter = document.getElementById('align-center');
const alignRight = document.getElementById('align-right');

alignLeft.addEventListener('click', ()=>{
  alignLeft.classList.toggle('bg-blue-500');
  alignLeft.classList.toggle('text-white');
  textarea.classList.toggle('text-left');

  alignCenter.classList.remove('bg-blue-500');
  alignCenter.classList.remove('text-white');
  textarea.classList.remove('text-center')

  alignRight.classList.remove('bg-blue-500');
  alignRight.classList.remove('text-white');
  textarea.classList.remove('text-right');
});

alignCenter.addEventListener('click', ()=>{
  alignCenter.classList.add('bg-blue-500');
  alignCenter.classList.add('text-white');
  textarea.classList.add('text-center')

  alignLeft.classList.remove('bg-blue-500');
  alignLeft.classList.remove('text-white');
  textarea.classList.remove('text-left');

  alignRight.classList.remove('bg-blue-500');
  alignRight.classList.remove('text-white');
  textarea.classList.remove('text-right');
})

alignRight.addEventListener('click', ()=>{
  alignRight.classList.add('bg-blue-500');
  alignRight.classList.add('text-white');
  textarea.classList.add('text-right');
  
  alignCenter.classList.remove('bg-blue-500');
  alignCenter.classList.remove('text-white');
  textarea.classList.remove('text-center');
  
  alignLeft.classList.remove('bg-blue-500');
  alignLeft.classList.remove('text-white');
  textarea.classList.remove('text-left');
})