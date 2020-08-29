class Lang{

    constructor(){

        this.pt = {
            "banner_title": "Bem Vindo(a)!",
            "banner_text": "Pode me chamar de Deni. Esta é minha casa na internet. Sou um desenvolvedor front end, sinta-se à vontade para dar uma olhada.",
            "menu_item_about": "Sobre",
            "menu_item_skills": "Habilidades",
            "menu_item_tools": "Ferramentas",
            "menu_item_works": "Trabalhos e Projetos",
            "menu_item_contact": "Contato",
            "about_title": "Olá!",
            "about_text": "Meu nome é Denilson, mas pode me chamar de Deni, sou um desenvolvedor front end e moro em Araçatuba - SP. Como eu disse, você está na minha casa na internet, aqui verá minhas habilidades, meus trabalhos e meus projetos. Estou sempre estudando e procurando melhorar como profissional. Fique à vontade para olhar e caso goste do que vê, é mais do que bem vindo(a) para ",
            "about_link": "entrar em contato",
            "skills_title": "Habilidades",
            "skills_subtitle": "Aqui vou contar sobre minhas habilidades e algumas das ferramentas que uso para dar vida às idéias e projetos.",
            "skills_item1_title": "Layout Responsivo",
            "skills_item1_subtitle": "Faça seu website ser compatível com todos os dispositivos, seus visitantes podem vir desde smartphones à desktops, esteja preparado para eles.",
            "tools_title": "Ferramentas",
            "jobs_title": "Trabalhos e Projetos",
            "jobs_item1_title": "Escola de Música",
            "jobs_item1_type": "Projeto",
            "jobs_item1_description": "Este é um projeto que fiz com o propósito de estudo.",
            "jobs_item_link": "Confira!",
            "contact_title": "Contato",
            "developed_by": "Desenvolvido por:"
        };
        
        this.en = {
            "banner_title": "Welcome!",
            "banner_text": "You may call me Deni. This is my home on the internet. I'm a front end developer, feel free to take a look.",
            "menu_item_about": "About",
            "menu_item_skills": "Skills",
            "menu_item_tools": "Tools",
            "menu_item_works": "Works and Projects",
            "menu_item_contact": "Contact",
            "about_title": "Hello!",
            "about_text": "My name is Denilson, but you may call me Deni, I'm a front end developer based in Araçatuba - SP, Brazil. Like said, you're in my home on the internet, here you'll see my skills, my works and my projects. I'm always studying and looking to grow as a professional. Feel free to take a look and if you like what you see, you're more than welcome to ",
            "about_link": "get in touch",
            "skills_title": "Skills",
            "skills_subtitle": "Here I'm going to tell you about my skills e some of the tools I use to bring projects and ideas to life",
            "skills_item1_title": "Responsive Layout",
            "skills_item1_subtitle": "Make your website compatible with all devices, your visitors can come from smartphones to desktops, be ready for them.",
            "tools_title": "Tools",
            "jobs_title": "Works and Projects",
            "jobs_item1_title": "Music School",
            "jobs_item1_type": "Project",
            "jobs_item1_description": "This is a project I made with a study purpose.",
            "jobs_item_link": "Check it Out!",
            "contact_title": "Contact",
            "developed_by": "Developed by:"
        }

    }

    get portugueseLang(){
        return this.pt;
    }

    get englishLang(){
        return this.en;
    }

}