document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
  
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário
  
        fetch(this.action, {
          method: this.method,
          body: new FormData(this),
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            // Exibe a mensagem de sucesso
            successMessage.style.display = 'block';
            form.reset(); // Limpa o formulário
  
            // Oculta a mensagem após 5 segundos
            setTimeout(() => {
              successMessage.style.display = 'none';
            }, 5000);
          } else {
            alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
          }
        })
        .catch(error => {
          alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
          console.error(error);
        });
      });
    }
  });


  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form'); // Identifica o formulário
    const successMessage = document.getElementById('success-message'); // Mensagem de sucesso
    const errorMessage = document.getElementById('error-message'); // Mensagem de erro
  
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário
  
        // Exibe um ícone de carregamento (opcional)
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.innerHTML = 'Enviando...';
        submitButton.disabled = true;
  
        // Envia os dados do formulário usando Fetch API
        fetch(this.action, {
          method: this.method,
          body: new FormData(this),
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            // Exibe a mensagem de sucesso
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            form.reset(); // Limpa o formulário
  
            // Oculta a mensagem após 5 segundos
            setTimeout(() => {
              successMessage.style.display = 'none';
            }, 5000);
          } else {
            // Exibe a mensagem de erro
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
          }
        })
        .catch(error => {
          // Exibe a mensagem de erro em caso de falha na requisição
          errorMessage.style.display = 'block';
          successMessage.style.display = 'none';
          console.error(error);
        })
        .finally(() => {
          // Restaura o botão de envio
          submitButton.innerHTML = 'Enviar Mensagem';
          submitButton.disabled = false;
        });
      });
    }
  });