function barra(){
    var skills = document.getElementById("habilidad");
    var distancia_skills = window.innerHeight-skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByName("progreso");
        habilidades[0].classList.add(CSharp);
        habilidades[1].classList.add(htmlcss);
        habilidades[2].classList.add(Git);
        habilidades[3].classList.add(TBE);
        habilidades[4].classList.add(Ent);
        habilidades[5].classList.add(Cre);
    }
}