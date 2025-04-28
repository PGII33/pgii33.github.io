import{_ as n}from"./q-Ci2tqS-R.js";import{t as a,b as e,q as l}from"./q-DI6q-dMs.js";const r=`
    .header-nav {
      display: flex;
      justify-content: space-between;
      font-size: 1.5em;
      width: 100%;
      padding: 1rem;
      background-color: #D6CBAF;
      flex-wrap: wrap;
    }

    .header-logo {
      width: 20%;
      display: flex;
      justify-content: center;
      min-width: 150px;
    }

    .header-links {
      width: 30%;
      display: flex;
      justify-content: space-around;
      min-width: 300px;
    }

    .header-links a:hover,
    .header-logo a:hover
    {
      transform: scale(1.1);
      transition: transform 0.2s ease-in-out;
    }

    @media (max-width: 768px) {
      .header-nav {
        flex-direction: column;
        align-items: center;
      }

      .header-logo,
      .header-links {
        width: 100%;
        justify-content: center;
        margin-bottom: 10px;
      }

      .header-links {
        flex-direction: column;
        align-items: center;
      }

      .header-links a {
        margin: 5px 0;
      }
    }
  `,t=Object.freeze(Object.defineProperty({__proto__:null,s_d7akcssg4D0:r},Symbol.toStringTag,{value:"Module"})),i=()=>(a(l(()=>n(()=>Promise.resolve().then(()=>t),void 0),"s_d7akcssg4D0")),e("nav",null,{class:"header-nav"},[e("div",null,{class:"header-logo"},e("a",null,{href:"/"},"Micky MARI",3,null),3,null),e("div",null,{class:"header-links"},[e("a",null,{href:"/projet"},"Projets",3,null),e("a",null,{href:"/about"},"À Propos",3,null)],3,null)],3,"99_0"));export{i as s,r as s_d7akcssg4D0};
