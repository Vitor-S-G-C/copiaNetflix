const texts = {
  pt: {
    entrar: "Entrar",
    t1: "Filmes, séries e muito mais. Sem limites.",
    t2: "Assista onde quiser. Cancele quando quiser.",
    t3: "Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.",
    botao: "Vamos lá",
  },
  en: {
    entrar: "Sign In",
    t1: "Movies, series and much more. No limits.",
    t2: "Watch anywhere. Cancel anytime.",
    t3: "Ready to watch? Enter your email to create or restart your membership.",
    botao: "Let's go",
  },
};

let currentLang = "pt";

document.getElementById("langBtn").addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";

  document.querySelector(".Entra").textContent = texts[currentLang].entrar;
  document.getElementById("title1").textContent = texts[currentLang].t1;
  document.getElementById("title2").textContent = texts[currentLang].t2;
  document.getElementById("title3").textContent = texts[currentLang].t3;
  document.getElementById("ctaBtn").textContent = texts[currentLang].botao;

  document.getElementById("langBtn").textContent =
    currentLang === "pt" ? "EN" : "PT";

  document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en";
});
