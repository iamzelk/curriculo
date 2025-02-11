function showSection(sectionId, button) {
    const sections = document.querySelectorAll('.section');
    const buttons = document.querySelectorAll('nav button');
    
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(sectionId).classList.add('active');
    button.classList.add('active');
}

// Ativar a primeira seção e botão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('resumo').classList.add('active');
    document.querySelector('nav button').classList.add('active');
});
