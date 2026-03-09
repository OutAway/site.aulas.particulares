import { useState } from "react";
import { Menu, X, ArrowRight, Star, Check, ChevronDown, Zap, Clock, Users, Award } from "lucide-react";

const IMG_HERO = "https://images.stockcake.com/public/7/0/5/705b5b30-2a4a-4b44-9ff2-a6be6693e4b5/excited-classroom-kids-stockcake.jpg";
const IMG_STUDENT1 = "https://i.imgur.com/2QzmZ6e.png";
const IMG_STUDENT2 = "https://i.imgur.com/Rr5Uqem.png";
const IMG_STUDENT3 = "https://i.imgur.com/dJm3BuT.png";
const IMG_STUDENT4 = "https://i.imgur.com/1AHo3FI.png";
const IMG_STUDENT5 = "https://i.imgur.com/eb0E6ow.png";

const subjects = [
  { emoji: "📐", name: "Matemática", level: "Fund. • Médio • Vestibular", color: "bg-yellow-400", textColor: "text-yellow-900" },
  { emoji: "⚛️", name: "Física", level: "Médio • Vestibular", color: "bg-violet-500", textColor: "text-white" },
  { emoji: "⚗️", name: "Química", level: "Médio • Vestibular", color: "bg-emerald-400", textColor: "text-emerald-900" },
  { emoji: "📖", name: "Português e Redação", level: "Fund. • Médio • Vestibular", color: "bg-orange-400", textColor: "text-orange-900" },
  { emoji: "🌎", name: "Inglês", level: "Básico ao Avançado", color: "bg-sky-400", textColor: "text-sky-900" },
  { emoji: "💻", name: "Programação", level: "Lógica, Python, Web, Game Design, Office", color: "bg-pink-500", textColor: "text-white" },
  { emoji: "🧬", name: "Biologia", level: "Fund. • Médio • Vestibular, Universitário", color: "bg-lime-400", textColor: "text-lime-900" },
  { emoji: "🔭", name: "Ciências", level: "Fundamental", color: "bg-cyan-400", textColor: "text-cyan-900" },
  { emoji: "✍️", name: "Orientação acadêmica", level: "Graduação e Pós", color: "bg-rose-400", textColor: "text-rose-900" },
];

const testimonials = [
  { name: "Raquel Souza", role: "Aprovada na FUVEST", text: "Em 4 meses de aula, passei no vestibular que tanto sonhei!", stars: 5, img: IMG_STUDENT3 },
  { name: "Amanda Lima", role: "Nutrição UVV", text: "Sem a ajuda do João eu jamais teria conseguido terminar meu TCC. Muito obrigada!", stars: 5, img: IMG_STUDENT4 },
  { name: "Pedro Costa", role: "Aluno do 3º ano", text: "Fui aluno do Rauta durante meu pré-vestibular e hoje sou formado em História pela UFES. Valeu mesmo, irmão!", stars: 5, img: IMG_STUDENT5 },
];

const faqs = [
  { q: "As aulas são online ou presenciais?", a: "Ofereço as duas opções! Online via Google Meet ou presencial em Píuma ou região." },
  { q: "Qual a duração de cada aula?", a: "1 hora por padrão, podendo combinar sessões de 1h30 ou 2h conforme sua necessidade." },
  { q: "Tem aula experimental?", a: "Sim! Primeira aula possui desconto de 50%." },
  { q: "Como funciona o pagamento?", a: "PIX, dinheiro ou cartão. O pagamento pode ser realizado por aula ou em pacotes." },
  { q: "Vocês fazem plano de estudos?", a: "Sim, um cronograma personalizado é montado pra cada aluno com base nos seus objetivos." },
  { q: "E os alunos com necessidades especiais?", a: "Todo aluno é bem vindo. Os métodos são personalizado de acordo com as necessidades de cada um." },

];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#FFFBF0" }}>

      {/* ───────────── NAV ───────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "#FFFBF0", borderBottom: "2px solid #1a1a1a" }}>
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("topo")} className="flex items-center gap-2">
            <span className="text-2xl">✏️</span>
            <span style={{ color: "#1a1a1a", letterSpacing: "-0.05em" }} className="tracking-tight">
              Prof<span style={{ color: "#F97316" }}>.</span> João Paulo Rauta
            </span>
          </button>

          <div className="hidden md:flex items-center gap-7 text-sm" style={{ color: "#1a1a1a" }}>
            {[["sobre", "Sobre"], ["materias", "Matérias"], ["depoimentos", "Depoimentos"], ["precos", "Preços"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="hover:opacity-60 transition-opacity">{label}</button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("contato")}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
            style={{ backgroundColor: "#F97316", color: "#fff", border: "2px solid #1a1a1a", borderRadius: "100px", boxShadow: "3px 3px 0 #1a1a1a" }}
          >
            Agendar primeira aula <ArrowRight className="w-4 h-4" />
          </button>

          <button className="md:hidden" style={{ color: "#1a1a1a" }} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-5 pb-5 pt-2 flex flex-col gap-3 text-sm" style={{ borderTop: "2px solid #1a1a1a", backgroundColor: "#FFFBF0" }}>
            {[["sobre", "Sobre"], ["materias", "Matérias"], ["depoimentos", "Depoimentos"], ["precos", "Preços"], ["contato", "Contato"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left py-1" style={{ color: "#1a1a1a" }}>{label}</button>
            ))}
          </div>
        )}
      </nav>

      {/* ───────────── HERO ───────────── */}
      <section id="topo" className="pt-16 relative overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none" style={{ top: "60px" }}>
          <span style={{ fontSize: "clamp(120px, 22vw, 280px)", color: "#F97316", opacity: 0.06, lineHeight: 1, whiteSpace: "nowrap", letterSpacing: "-0.05em" }}>
            APRENDER
          </span>
        </div>

        <div className="absolute top-24 right-10 w-24 h-24 rounded-full pointer-events-none" style={{ backgroundColor: "#FDE68A", border: "2px solid #1a1a1a", transform: "rotate(15deg)" }} />
        <div className="absolute bottom-32 left-8 w-16 h-16 pointer-events-none" style={{ backgroundColor: "#A78BFA", border: "2px solid #1a1a1a", borderRadius: "12px", transform: "rotate(-10deg)" }} />
        <div className="absolute top-40 left-1/4 w-10 h-10 pointer-events-none" style={{ backgroundColor: "#6EE7B7", border: "2px solid #1a1a1a", borderRadius: "50%", transform: "rotate(20deg)" }} />

        <div className="max-w-6xl mx-auto px-5 pt-16 pb-20 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm" style={{ backgroundColor: "#FDE68A", border: "2px solid #1a1a1a", borderRadius: "100px", boxShadow: "2px 2px 0 #1a1a1a" }}>
              <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
              <span style={{ color: "#1a1a1a" }}>+200 alunos aprovados</span>
            </div>

            <h1 style={{ fontSize: "clamp(38px, 6vw, 72px)", lineHeight: 1.05, letterSpacing: "-0.04em", color: "#1a1a1a" }} className="mb-6">
              Aulas que fazem você{" "}
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: "#F97316" }}> chegar lá.</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 -z-0" style={{ backgroundColor: "#FDE68A", transform: "skewX(-3deg)" }} />
              </span>{" "}
              
            </h1>

            <p className="mb-8 max-w-lg" style={{ color: "#555", lineHeight: 1.7 }}>
              Metodologia personalizada, atenção 100% individual e resultados comprovados. Do ensino fundamental ao universitário — online ou presencial.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("contato")}
                className="flex items-center gap-2 px-7 py-4 transition-all hover:-translate-y-1 active:translate-y-0"
                style={{ backgroundColor: "#1a1a1a", color: "#FFFBF0", border: "2px solid #1a1a1a", borderRadius: "14px", boxShadow: "4px 4px 0 #F97316" }}
              >
                Quero aula com desconto <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollTo("materias")}
                className="flex items-center gap-2 px-7 py-4 transition-all hover:-translate-y-1 active:translate-y-0"
                style={{ backgroundColor: "transparent", color: "#1a1a1a", border: "2px solid #1a1a1a", borderRadius: "14px", boxShadow: "4px 4px 0 #1a1a1a" }}
              >
                Ver matérias
              </button>
            </div>

            <div className="flex flex-wrap gap-6 mt-10">
              {[["400+", "Alunos", "#FDE68A"], ["Altíssima", "Aprovação", "#A78BFA"], ["10+ anos", "Experiência", "#6EE7B7"]].map(([val, label, bg]) => (
                <div key={label} className="px-4 py-3 text-center" style={{ backgroundColor: bg, border: "2px solid #1a1a1a", borderRadius: "14px", boxShadow: "3px 3px 0 #1a1a1a" }}>
                  <div style={{ fontSize: "22px", letterSpacing: "-0.04em", color: "#1a1a1a" }}>{val}</div>
                  <div style={{ fontSize: "11px", color: "#333", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center mt-8 md:mt-0">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl" style={{ backgroundColor: "#F97316", border: "2px solid #1a1a1a" }} />
              <img
                src={IMG_HERO}
                alt="Professor"
                className="relative w-full rounded-3xl object-cover"
                style={{ height: "460px", border: "2px solid #1a1a1a", display: "block" }}
              />
              <div className="absolute -bottom-5 -left-8 flex items-center gap-2 px-4 py-3" style={{ backgroundColor: "#FFFBF0", border: "2px solid #1a1a1a", borderRadius: "14px", boxShadow: "3px 3px 0 #1a1a1a" }}>
                <span className="text-xl">🎉</span>
                <div>
                  <div style={{ fontSize: "12px", color: "#1a1a1a" }}>1ª aula</div>
                  <div style={{ fontSize: "11px", color: "#F97316" }}>COM DESCONTO!</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden leading-none" style={{ transform: "translateY(2px)" }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14">
            <path d="M0 60 Q360 0 720 40 Q1080 80 1440 20 L1440 60 Z" fill="#1a1a1a" />
          </svg>
        </div>
      </section>

      {/* ───────────── TICKER ───────────── */}
      <div className="overflow-hidden py-4" style={{ backgroundColor: "#1a1a1a" }}>
        <div style={{ display: "flex", gap: "3rem", animation: "marquee 22s linear infinite", whiteSpace: "nowrap" }}>
          {["📐 Matemática", "⚛️ Física", "⚗️ Química", "📖 Português", "🌎 Inglês", "💻 Programação", "🧬 Biologia", "🔭 Ciências", "✍️ Redação", "🎯 ENEM", "🏆 Vestibular",
            "📐 Matemática", "⚛️ Física", "⚗️ Química", "📖 Português", "🌎 Inglês", "💻 Programação", "🧬 Biologia", "🔭 Ciências", "✍️ Redação", "🎯 ENEM", "🏆 Vestibular"].map((item, i) => (
            <span key={i} style={{ color: "#FDE68A", fontSize: "14px", letterSpacing: "0.05em" }}>{item}</span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>

      {/* ───────────── SOBRE ───────────── */}
      <section id="sobre" className="py-24 relative" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-3xl" style={{ backgroundColor: "#F97316" }} />
            <img src={IMG_STUDENT1} alt="Sobre" className="relative w-full rounded-3xl object-cover" style={{ height: "440px", border: "2px solid #FFFBF0", display: "block" }} />
            <div className="absolute -top-5 -right-5 w-20 h-20 flex flex-col items-center justify-center text-center" style={{ backgroundColor: "#FDE68A", border: "2px solid #FFFBF0", borderRadius: "50%", boxShadow: "3px 3px 0 #F97316" }}>
              <span style={{ fontSize: "18px", lineHeight: 1, color: "#1a1a1a" }}>5+</span>
              <span style={{ fontSize: "9px", color: "#333", lineHeight: 1.2, textTransform: "uppercase" }}>anos de exp.</span>
            </div>
          </div>

          <div>
            <div className="inline-block px-3 py-1 text-xs mb-5 uppercase tracking-widest" style={{ backgroundColor: "#F97316", color: "#fff", borderRadius: "6px" }}>
              Sobre mim
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "#FFFBF0", lineHeight: 1.1, letterSpacing: "-0.04em" }} className="mb-5">
              Olá! Sou o{" "}
              <span style={{ color: "#FDE68A" }}>Prof. João Paulo Rauta</span> 👋
            </h2>
            <p style={{ color: "#999", lineHeight: 1.8 }} className="mb-5">
              Formado em Ciências Biológicas pela UFES e mestrado pela UFMG. Desde o ensino médio me dedico à sala de aula com o objetivo de transformar a relação dos meus alunos com o aprendizado. Possuo experiência desde o Ensino Fundamental ao Superior. Cada aula é planejada individualmente — sem fórmulas genéricas, sem atalhos.
            </p>
            <p style={{ color: "#999", lineHeight: 1.8 }} className="mb-8">
              Minha missão é simples: ajudar você entender de verdade, aprender se divertindo.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <Award className="w-5 h-5" />, text: "Formado pela UFES e UFMG", bg: "#A78BFA" },
                { icon: <Users className="w-5 h-5" />, text: "+400 alunos atendidos", bg: "#6EE7B7" },
                { icon: <Clock className="w-5 h-5" />, text: "Horários flexíveis", bg: "#FDE68A" },
                { icon: <Zap className="w-5 h-5" />, text: "Resultado garantido", bg: "#F97316" },
              ].map(({ icon, text, bg }) => (
                <div key={text} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: "#2a2a2a", border: "1.5px solid #3a3a3a" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: bg, color: "#1a1a1a" }}>
                    {icon}
                  </div>
                  <span style={{ color: "#ddd", fontSize: "13px" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── MATÉRIAS ───────────── */}
      <section id="materias" className="py-24 relative" style={{ backgroundColor: "#FFFBF0" }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-widest" style={{ backgroundColor: "#A78BFA", color: "#fff", borderRadius: "6px" }}>
              O que eu ensino
            </div>
            <h2 style={{ fontSize: "clamp(30px, 5vw, 56px)", color: "#1a1a1a", lineHeight: 1.05, letterSpacing: "-0.04em" }}>
              Matérias disponíveis
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {subjects.map((s, i) => (
              <div
                key={s.name}
                className="p-6 rounded-2xl cursor-default transition-all hover:-translate-y-2 hover:scale-105 duration-200"
                style={{ backgroundColor: i % 2 === 0 ? "#1a1a1a" : "#FFFBF0", border: "2px solid #1a1a1a", boxShadow: "4px 4px 0 #1a1a1a" }}
              >
                <div className="text-4xl mb-4">{s.emoji}</div>
                <span className={`px-2 py-0.5 rounded text-xs ${s.color} ${s.textColor}`}>{s.level}</span>
                <h3 style={{ fontSize: "20px", letterSpacing: "-0.03em", color: i % 2 === 0 ? "#fff" : "#1a1a1a" }} className="mt-2">
                  {s.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── COMO FUNCIONA ───────────── */}
      <section className="py-24" style={{ backgroundColor: "#A78BFA", borderTop: "2px solid #1a1a1a", borderBottom: "2px solid #1a1a1a" }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-widest" style={{ backgroundColor: "#1a1a1a", color: "#FDE68A", borderRadius: "6px" }}>
              Simples assim
            </div>
            <h2 style={{ fontSize: "clamp(30px, 5vw, 56px)", color: "#1a1a1a", lineHeight: 1.05, letterSpacing: "-0.04em" }}>
              Como funciona
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", emoji: "💬", title: "Manda mensagem", desc: "Entre em contato pelo formulário ou WhatsApp. Vamos conversar sobre seus objetivos." },
              { num: "02", emoji: "🧪", title: "Aula experimental", desc: "Fazemos DESCONTO para você conhecer a metodologia, sem compromisso." },
              { num: "03", emoji: "🚀", title: "Decola nos estudos", desc: "Montamos um plano personalizado para você chegar lá." },
            ].map((step) => (
              <div key={step.num} className="p-7 rounded-2xl relative overflow-hidden" style={{ backgroundColor: "#FFFBF0", border: "2px solid #1a1a1a", boxShadow: "5px 5px 0 #1a1a1a" }}>
                <div style={{ fontSize: "clamp(60px, 10vw, 100px)", color: "#1a1a1a", opacity: 0.06, position: "absolute", top: -10, right: 10, lineHeight: 1, fontWeight: 900, letterSpacing: "-0.05em" }}>
                  {step.num}
                </div>
                <div className="text-5xl mb-4">{step.emoji}</div>
                <h3 style={{ fontSize: "20px", color: "#1a1a1a", letterSpacing: "-0.03em", marginBottom: "10px" }}>{step.title}</h3>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── DEPOIMENTOS ───────────── */}
      <section id="depoimentos" className="py-24" style={{ backgroundColor: "#FFFBF0" }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-widest" style={{ backgroundColor: "#6EE7B7", color: "#1a1a1a", borderRadius: "6px" }}>
              Depoimentos
            </div>
            <h2 style={{ fontSize: "clamp(30px, 5vw, 56px)", color: "#1a1a1a", lineHeight: 1.05, letterSpacing: "-0.04em" }}>
              Alunos que{" "}
              <span style={{ color: "#F97316" }}>transformaram</span>{" "}
              sua vida
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => {
              const bgs = ["#FDE68A", "#A78BFA", "#6EE7B7"];
              return (
                <div key={t.name} className="p-6 rounded-2xl relative" style={{ backgroundColor: bgs[i], border: "2px solid #1a1a1a", boxShadow: "5px 5px 0 #1a1a1a", transform: i === 1 ? "rotate(1deg)" : i === 2 ? "rotate(-0.5deg)" : "rotate(-1deg)" }}>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p style={{ color: "#1a1a1a", lineHeight: 1.7, fontSize: "14px" }} className="mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" style={{ border: "2px solid #1a1a1a" }} />
                    <div>
                      <div style={{ color: "#1a1a1a", fontSize: "14px" }}>{t.name}</div>
                      <div style={{ color: "#555", fontSize: "12px" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── PREÇOS ───────────── */}
      <section id="precos" className="py-24" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-widest" style={{ backgroundColor: "#F97316", color: "#fff", borderRadius: "6px" }}>
              Investimento
            </div>
            <h2 style={{ fontSize: "clamp(30px, 5vw, 56px)", color: "#FFFBF0", lineHeight: 1.05, letterSpacing: "-0.04em" }}>
              Planos e preços
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 items-stretch">
            {[
              { name: "Avulso", price: "R$ 60", sub: "por hora", bg: "#FFFBF0", accent: "#6EE7B7", features: ["1 matéria", "Horário flexível", "Material de apoio", "Suporte por WhatsApp"], highlight: false },
              { name: "Semanal", price: "R$ 150", sub: "3 aulas/semana", bg: "#F97316", accent: "#FDE68A", features: ["Até 3 matérias", "3 aulas semanais", "Plano personalizado", "Suporte ilimitado", "Simulados e exercícios para casa"], highlight: true },
              { name: "Premium", price: "R$ 230", sub: "5 aulas/semana", bg: "#FFFBF0", accent: "#A78BFA", features: ["Matérias ilimitadas", "5 aulas semanais", "Plano completo", "Suporte ilimitado", "Simulados + exercícios para casa + apoio online"], highlight: false },
             
    ].map((plan) => (
              <div
                key={plan.name}
                className={`p-7 rounded-2xl flex flex-col transition-all hover:-translate-y-2 duration-200 ${plan.highlight ? "scale-105" : ""}`}
                style={{ backgroundColor: plan.bg, border: `2px solid ${plan.highlight ? "#F97316" : "#FFFBF0"}`, boxShadow: plan.highlight ? "6px 6px 0 #FDE68A" : "5px 5px 0 #FFFBF0" }}
              >
                {plan.highlight && (
                  <div className="text-xs px-3 py-1 rounded-full w-fit mb-3" style={{ backgroundColor: "#1a1a1a", color: "#FDE68A" }}>⭐ Mais popular</div>
                )}
                <div className="text-xs uppercase tracking-widest mb-1" style={{ color: plan.highlight ? "#fff" : "#777" }}>{plan.name}</div>
                <div style={{ fontSize: "42px", color: plan.highlight ? "#fff" : "#1a1a1a", lineHeight: 1, letterSpacing: "-0.04em" }}>{plan.price}</div>
                <div className="text-sm mb-6" style={{ color: plan.highlight ? "#FFD0AA" : "#888" }}>{plan.sub}</div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: plan.accent, border: "1.5px solid #1a1a1a" }}>
                        <Check className="w-3 h-3" style={{ color: "#1a1a1a" }} />
                      </div>
                      <span style={{ color: plan.highlight ? "#fff" : "#444" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollTo("contato")}
                  className="w-full py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
                  style={{ backgroundColor: "#1a1a1a", color: plan.highlight ? "#FDE68A" : "#FFFBF0", border: "2px solid #1a1a1a", boxShadow: "3px 3px 0 " + plan.accent }}
                >
                  Começar agora →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section className="py-24" style={{ backgroundColor: "#FFFBF0" }}>
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-widest" style={{ backgroundColor: "#FDE68A", color: "#1a1a1a", borderRadius: "6px", border: "1.5px solid #1a1a1a" }}>
              FAQ
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#1a1a1a", letterSpacing: "-0.04em" }}>
              Perguntas frequentes
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} style={{ border: "2px solid #1a1a1a", borderRadius: "16px", overflow: "hidden", boxShadow: openFaq === i ? "4px 4px 0 #F97316" : "3px 3px 0 #1a1a1a", transition: "box-shadow 0.2s" }}>
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  style={{ backgroundColor: openFaq === i ? "#FDE68A" : "#FFFBF0", color: "#1a1a1a" }}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span style={{ fontSize: "15px" }}>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-1" style={{ backgroundColor: "#FFFBF0", color: "#555", fontSize: "14px", lineHeight: 1.8 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── CONTATO ───────────── */}
      <section id="contato" className="py-24" style={{ backgroundColor: "#6EE7B7", borderTop: "2px solid #1a1a1a" }}>
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-start">
          <div>
            <div className="inline-block px-3 py-1 text-xs mb-4 uppercase tracking-widest" style={{ backgroundColor: "#1a1a1a", color: "#6EE7B7", borderRadius: "6px" }}>
              Contato
            </div>
            <h2 style={{ fontSize: "clamp(30px, 5vw, 54px)", color: "#1a1a1a", lineHeight: 1.05, letterSpacing: "-0.04em" }} className="mb-5">
              Bora começar? A primeira aula é com desconto! 🎁
            </h2>
            <p style={{ color: "#1a1a1a", lineHeight: 1.8, opacity: 0.7 }} className="mb-8">
              Preencha o formulário ou fale direto pelo WhatsApp. Respondo rapidinho!
            </p>
            <div className="space-y-4">
              {[
    { emoji: "📱", label: "WhatsApp", val: "(27) 99627-9505", link: "https://wa.me/5527996279505?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas." },
    { emoji: "📧", label: "E-mail", val: "joao.paulo.rauta@gmail.com" },
    { emoji: "📍", label: "Local", val: "Piúma, ES — Online no Brasil todo" },
    { emoji: "🕐", label: "Horários", val: "Seg–Sáb, 7h às 21h" },
  ].map((item) => (
    <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: "#FFFBF0", border: "2px solid #1a1a1a", boxShadow: "3px 3px 0 #1a1a1a" }}>
      <span className="text-2xl">{item.emoji}</span>
      <div>
        <div style={{ fontSize: "11px", color: "#888", textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.label}</div>
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1a1a1a", fontSize: "14px", textDecoration: "none" }}
            className="hover:underline"
          >
            {item.val}
          </a>
        ) : (
          <div style={{ color: "#1a1a1a", fontSize: "14px" }}>{item.val}</div>
        )}
      </div>
    </div>
  ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#FFFBF0", border: "2px solid #1a1a1a", boxShadow: "6px 6px 0 #1a1a1a" }}>
            {sent ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">🎉</div>
                <h3 style={{ color: "#1a1a1a", fontSize: "24px", letterSpacing: "-0.03em" }} className="mb-2">Mensagem enviada!</h3>
                <p style={{ color: "#666", fontSize: "14px" }}>Entrarei em contato em breve. Até logo!</p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm" style={{ color: "#F97316", textDecoration: "underline" }}>
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <h3 style={{ fontSize: "20px", color: "#1a1a1a", letterSpacing: "-0.03em", marginBottom: "16px" }}>Manda uma mensagem 👇</h3>
                {[
                  { label: "Seu nome *", key: "name", type: "text", placeholder: "Como posso te chamar?" },
                  { label: "Seu e-mail *", key: "email", type: "email", placeholder: "seu@email.com" },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label style={{ fontSize: "12px", color: "#666", textTransform: "uppercase", letterSpacing: "0.05em" }} className="block mb-1">{label}</label>
                    <input
                      required
                      type={type}
                      value={form[key as keyof typeof form]}
                      onChange={e => setForm({ ...form, [key]: e.target.value })}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                      style={{ border: "2px solid #1a1a1a", backgroundColor: "#fff", color: "#1a1a1a" }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: "12px", color: "#666", textTransform: "uppercase", letterSpacing: "0.05em" }} className="block mb-1">Matéria</label>
                  <select
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                    style={{ border: "2px solid #1a1a1a", backgroundColor: "#fff", color: "#1a1a1a" }}
                  >
                    <option value="">Selecione uma matéria</option>
                    {subjects.map(s => <option key={s.name}>{s.name}</option>)}
                    <option>Outra</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: "12px", color: "#666", textTransform: "uppercase", letterSpacing: "0.05em" }} className="block mb-1">Mensagem</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Conta um pouco sobre seus objetivos..."
                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none resize-none"
                    style={{ border: "2px solid #1a1a1a", backgroundColor: "#fff", color: "#1a1a1a" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm transition-all hover:-translate-y-1 active:translate-y-0"
                  style={{ backgroundColor: "#1a1a1a", color: "#FDE68A", border: "2px solid #1a1a1a", boxShadow: "4px 4px 0 #F97316" }}
                >
                  Enviar mensagem 🚀
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      

      {/* ───────────── FOOTER ───────────── */}
      <footer className="py-8" style={{ backgroundColor: "#1a1a1a", borderTop: "2px solid #333" }}>
        
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">✏️</span>
            <span style={{ color: "#FFFBF0", letterSpacing: "-0.04em" }}>
              Prof<span style={{ color: "#F97316" }}>.</span>João Paulo Rauta
            </span>
          </div>
          <p style={{ color: "#555", fontSize: "13px" }}>© 2025 — Todos os direitos reservados.</p>
          <div className="flex gap-5 text-sm">
            {["Sobre", "Matérias", "Preços", "Contato"].map(link => (
              <button key={link} onClick={() => scrollTo(link.toLowerCase())} className="hover:text-white transition-colors" style={{ color: "#555" }}>{link}</button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
