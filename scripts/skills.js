const formSkill = document.querySelector('.form-skill');

const inputSkill = document.getElementById('nova-skill');

const listaSkills = document.querySelector('.lista-skills');

const skillsPadrao = ['HTML', 'CSS', 'JavaScript', 'Flexbox', 'Responsividade'];

let skills = skillsPadrao;

const renderizarSkills = () => {
  const skillsHTML = skills.map((skill) => {
    return `<li>${skill}</li>`;
  });

  listaSkills.innerHTML = skillsHTML.join('');
};

//localstorage//

const skillsSalvas = localStorage.getItem('skills');

if (skillsSalvas) {
  skills = JSON.parse(skillsSalvas);
}
const salvarSkills = () => {
  localStorage.setItem('skills', JSON.stringify(skills));
};

formSkill.addEventListener('submit', (event) => {
  event.preventDefault();

  const novaSkill = inputSkill.value.trim();

  if (!novaSkill) {
    return;
  }

  skills.push(novaSkill);
  salvarSkills();

  renderizarSkills();

  formSkill.reset();
  inputSkill.focus();
});

renderizarSkills();
