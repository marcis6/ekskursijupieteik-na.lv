function show(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function goToForm(grade) {
  document.getElementById('form-subtitle').textContent = grade + ' • Aizpildiet formu, lai pabeigtu pieteikšanos';
  show('p2');
}

function goToSuccess() {
  show('p3');
}
