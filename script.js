const questions = [
  {
    q: "Quando queimamos gasolina no carro, para onde vai o carbono do combustível?",
    options: ["Vira poeira no chão", "Vira CO2 e vai para a atmosfera", "Desaparece", "Fica no motor"],
    correct: 1,
    f: "O carbono do combustível se une ao oxigênio do ar e vira CO2."
  },
  {
    q: "Qual é uma das maiores fontes de emissão de CO2 no mundo?",
    options: ["Andar de bicicleta", "Queima de carvão e petróleo", "Regar plantas", "Reciclar papel"],
    correct: 1,
    f: "A queima de combustíveis fósseis para gerar energia é a principal fonte de CO2."
  },
  {
    q: "Como as árvores ajudam no equilíbrio do carbono?",
    options: ["Produzem CO2 extra", "Absorvem CO2 na fotossíntese", "Não têm relação com o carbono", "Transformam CO2 em plástico"],
    correct: 1,
    f: "Na fotossíntese, as plantas absorvem CO2 e liberam oxigênio."
  },
  {
    q: "O que é o efeito estufa?",
    options: ["CO2 causando mais chuva", "Gases retendo calor perto da Terra", "Um buraco na camada de ozônio", "O ar ficando mais leve"],
    correct: 1,
    f: "Os gases de efeito estufa retêm o calor do sol, esquentando o planeta."
  },
  {
    q: "O que ajuda a reduzir a emissão de carbono no dia a dia?",
    options: ["Deixar aparelhos ligados à toa", "Usar mais transporte público ou bicicleta", "Comprar coisas novas com frequência", "Queimar lixo no quintal"],
    correct: 1,
    f: "Usar menos o carro e economizar energia reduz as emissões."
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById('question').textContent = q.q;
  document.getElementById('feedback').textContent = '';
  document.getElementById('next').style.display = 'none';

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => answer(i);
    optionsDiv.appendChild(btn);
  });
}

function answer(i) {
  const q = questions[current];
  const buttons = document.querySelectorAll('#options button');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correct) btn.classList.add('correct');
    else if (idx === i) btn.classList.add('wrong');
  });
  if (i === q.correct) score++;
  document.getElementById('feedback').textContent = q.f;
  document.getElementById('next').style.display = 'block';
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById('question').textContent = `Você acertou ${score} de ${questions.length}.`;
    document.getElementById('options').innerHTML = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('next').style.display = 'none';
  }
}

loadQuestion();
