import{a as o}from"./applySEO-c23d6e36.js";import{_ as l,r as d,g as c,w as r,T as u,o as p,b as t,t as a,k as n,f as m,p as _,l as h}from"./index-5674e6e6.js";const v={data(){return{content:{pt:{text:`
            Meu nome é Denilson, mas pode me chamar de Deni, sou um desenvolvedor front end e moro em
            Araçatuba - SP. Esta é a minha casa na internet, aqui verá minhas
            habilidades, meus trabalhos e meus projetos. Estou sempre estudando e procurando melhorar como
            profissional. Fique à vontade para olhar e caso goste do que vê, é mais do que bem vindo(a)
            para 
          `,link:"entrar em contato"},en:{text:`
            My name is Denilson, but you may call me Deni, I'm a front end developer based in 
            Araçatuba - SP, Brazil. This is my home on the internet, here you'll see 
            my skills, my works and my projects. I'm always studying and looking to grow as a professional. 
            Feel free to take a look and if you like what you see, you're more than welcome to 
          `,link:"get in touch"}}}},computed:{contentLang(){return this.$store.state.lang==="pt-BR"?this.content.pt:this.content.en},currentLang(){return this.$store.state.lang}},watch:{currentLang(e){e==="pt-BR"?o({title:"Desenvolvedor Front-End",description:"Deni Carmo - Desenvolvedor front-end | Vue.js | Nuxt.js | React.js"}):o({title:"Front-End Developer",description:"Deni Carmo - Front-end developer | Vue.js | Nuxt.js | React.js"})}},mounted(){this.$store.state.lang==="pt-BR"?o({title:"Desenvolvedor Front-End",description:"Deni Carmo - Desenvolvedor front-end | Vue.js | Nuxt.js | React.js"}):o({title:"Front-End Developer",description:"Deni Carmo - Front-end developer | Vue.js | Nuxt.js | React.js"})}},f=e=>(_("data-v-69898192"),e=e(),h(),e),g={id:"about",class:"about"},b=f(()=>t("div",{class:"about-bg"},[t("div",{class:"about-bg__mask"})],-1)),y={class:"about-title"},k={class:"about-text"};function D(e,j,x,w,B,s){const i=d("router-link");return p(),c(u,{name:"fadeIn",appear:""},{default:r(()=>[t("section",g,[b,t("span",y,a(e.$store.state.lang==="pt-BR"?"Olá!":"Hello!"),1),t("span",k,[n(a(s.contentLang.text)+" ",1),m(i,{to:"/contact",class:"about-link"},{default:r(()=>[n(a(s.contentLang.link),1)]),_:1}),n(". ")])])]),_:1})}const E=l(v,[["render",D],["__scopeId","data-v-69898192"]]);export{E as default};
