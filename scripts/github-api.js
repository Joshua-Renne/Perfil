//elementos que a API vai preencher

const fotoPerfil = document. querySelector('header img');
const nomePerfil = document.querySelector('header h1');
const cargoPerfil = document.querySelector('.cargo');
const containerProjetos = document.querySelector('.Projects');

//de quem ela vai pegar os dados

const usuarioGitHub = 'Joshua-Renne';

//dados do perfil vindo da api

const carregarPerfil = async () => {
    try{

        const resposta = await fetch(`https://api.github.com/users/${usuarioGitHub}`)
        
        if (!resposta.ok) {
            throw new Error('Erro ao buscar perfil');
        }
        
        const dados = await resposta.json();
        
        //Tratar dados que podem vir vazios
        fotoPerfil.src = dados.avatar_url;
        nomePerfil.textContent = dados.name || 'Joshua Rennê';
        cargoPerfil.textContent = dados.bio || 'Estudante de Engenharia de Software';
    } catch (error) {
        console.error('Não foi possível carregar o perfil', error);
    }
};

//Projetos vindos do repositorio do GitHub
const gradientes = ['projeto-1', 'projeto-2', 'projeto-3'];

const carregarProjetos = async () => {
    //loading
    containerProjetos.innerHTML = '<p>Carregando projetos...</p>';
    try{
        const resposta = await fetch(`https://api.github.com/users/${usuarioGitHub}/repos?sort=update&per_page=6`);
        const repos = await resposta.json();
        if (!resposta.ok) {
            throw new Error ('Erro ao buscar repositórios' + resposta.status);
        }

        const html = repos.map((repo, index) => {
            const gradiente = gradientes[index %3];
            return `
            <article>
                <div class="projeto-imagem ${gradiente}"></div>
                <h3>${repo.name}</h3>
                <p>${repo.description || 'Sem descrição'}</p>
                <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
            </article>
            `;
        });
        containerProjetos.innerHTML = html.join('');
    } catch (error){
        console.error('Não foi possível carregar os projetos', error);
    }
}
//requisição

//retiro o carregando e aparece os projetos
carregarPerfil();
carregarProjetos();


