function verificaFormulario(event) {
    event.preventDefault(); // Prevent form submission
  
    const inputs = document.querySelectorAll('.input-padrao');
  
    inputs.forEach(input => {
      const label = input.nextElementSibling;
  
      if (input.value.trim() === '') {
        label.style.visibility = 'visible';
        input.classList.add('input-vazio');
        input.classList.remove('input-preenchido');
      } else {
        if ((input.id === 'email' && !validateEmail(input.value)) || (input.id === 'telefone' && !validatePhone(telefoneInput.value))) {
          label.innerHTML = `Preencha com um ${input.name} válido`;
          label.style.visibility = 'visible';
          input.classList.add('input-vazio');
          input.classList.remove('input-preenchido');
        } else {
          label.style.visibility = 'hidden';
          input.classList.remove('input-vazio');
          input.classList.add('input-preenchido');
        }
      }
    });
  }
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validatePhone(phone) {
    const phoneRegex = /^\+?\d{0,2}\s?\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    return phoneRegex.test(phone);
  }
  
  const telefoneInput = document.getElementById('telefone');
  telefoneInput.addEventListener('input', formatTelefone);
  
  function formatTelefone() {
    const telefoneValue = telefoneInput.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (telefoneValue.length <= 2) {
      telefoneInput.value = telefoneValue;
    } else if (telefoneValue.length <= 7) {
      telefoneInput.value = `(${telefoneValue.slice(0, 2)}) ${telefoneValue.slice(2)}`;
    } else {
      telefoneInput.value = `(${telefoneValue.slice(0, 2)}) ${telefoneValue.slice(2, 7)}-${telefoneValue.slice(7)}`;
    }
  }