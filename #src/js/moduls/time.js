export const chooseAddress = () => {
    const groups = document.querySelectorAll('.time__group'),
    inputs = document.querySelectorAll('.time__input'),
    status = document.querySelectorAll('.time__status');
    inputs.forEach((input, i) => {
        input.addEventListener('change', () =>{
            console.log(input.value);
            if(input.value.trim() === ""){
                groups[i].classList.remove('active');
                status[i].textContent = 'не выбрано';
            } else {
                groups[i].classList.add('active');
                status[i].textContent = 'выбрано';
            }
        });
    });
};