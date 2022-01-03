const form = document.forms['send-mail'];

const name = form.elements.name;
const surname = form.elements.surname;
const email = form.elements.email;
const subject = form.elements.subject;
const message = form.elements.message;


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const values = {
    name: name.value,
    surname: surname.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  }
  
  const hasError = Object.values(values)
    .some(value => value.value === '');



  if (hasError) {
    alert('Por favor, preencha todos os campos')

    return;
  };


  emailjs.send('service_m78s7wr', 'template_h5b7kus', values)
    .then(() => {
      alert("Sua mensagem foi enviada com sucesso!");
      window.location.reload(true);
    }, (error) => { });
}
);