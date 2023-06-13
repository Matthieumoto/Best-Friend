document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.millieu1');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Récupère les valeurs des champs de connexion
        var login = document.getElementById('login').value;
        var password = document.getElementById('password').value;

        // Vérifie les identifiants
        if (login === 'Matthieu' && password === '22/02/06') {
            // Redirige vers la page 1 si les identifiants sont corrects
            window.location.href = 'Page1.html';
          } else if (login === 'Fete' && password === '2015') {
            // Redirige vers la page 3 si les identifiants sont corrects
            window.location.href = 'Page3.html';
          } else {
            // Redirige vers une autre page si les identifiants sont incorrects
            window.location.href = 'Page2.html';
          }          
    });
});