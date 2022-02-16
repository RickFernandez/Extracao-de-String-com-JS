const texto = `1 - Roteiros para *São Paulo*
A Terra da Garoa!
Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista

#Roteiro A | Região: Avenida Paulista
MASP; Parque Trianon; Rua Augusta

#Roteiro B | Região: Centro
Catedral da Sé; Pátio do Colégio; Rua Augusta

#Roteiro C | Região: Vila Madalena
Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila

2 - Roteiros para *Las Vegas*
Viva Las Vegas!
A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!

#Roteiro A | Região: Las Vegas Boulevard South
Fonte do Bellagio; Principais Cassinos; Madame Tussauds

#Roteiro B | Região: Downtown;
Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado;

#Roteiro C | Região: Las Vegas Boulevard North
Outlet Premium North; Stratosphere; Apple Fashion Show

3 - Roteiros para *Moscou*
Privet!
A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética

#Roteiro A | Região: Praça Vermelha
Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin

#Roteiro B | Região: Centro
Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou

#Roteiro C | Região: Obras pela cidade
Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station`

console.log(`Quantidade de caracteres: ${texto.length}`);;

console.log("busca no nome das cidades");
let buscar1 = texto.indexOf("*S");
let buscar2 = texto.indexOf("*L");
let buscar3 = texto.indexOf("*M");
console.log(buscar1);
console.log(buscar2);
console.log(buscar3);


let texto2 = "As cidades avaliadas são:"
let cidade1 = texto.slice(19, 28);
let cidade2 =texto.slice(536, 545);
let cidade3 =texto.slice(1133, 1139);

alert(`${texto2} ${cidade1}, ${cidade2} e ${cidade3}`);

console.log("busca do conteúdo do roteiro A de cada cidade");
let regiao1 = texto.indexOf("Avenida")
let regiao2 = texto.indexOf("South")
let regiao3 = texto.indexOf("Praça")
console.log(regiao1);
console.log(regiao2);
console.log(regiao3);

let texto3 = "O conteúdo do roteiro A de cada cidade avaliada são as seguintes regiões:"
let conteudo1 = texto.slice(291, 308);
let conteudo2 = texto.slice(829, 854);
let conteudo3 = texto.slice(1331, 1345);

alert(`${texto3} ${conteudo1}, ${conteudo2} e ${conteudo3}`);

console.log("busca dos pontos turísticos citados no roteiro A de cada cidade");
let local1 = texto.indexOf("MASP");
let local2 = texto.indexOf("Bellagio");
let local = texto.indexOf("Lênin");
console.log(local1);
console.log(local2);
console.log(local);

let texto4 = "Os locais citados no roteiro A de cada cidade são:"
let textoSP = texto.slice(308, 341);
let textoLV = texto.slice(854, 910);
let textoMoscou = texto.slice(1346, 1416);
alert(texto4);
alert(`São Paulo: ${textoSP}`);
alert(`Las Vegas: ${textoLV}`);
alert(`Moscou: ${textoMoscou}`);

console.log("busca dos pontos turísticos localizados no Centro de SP");
let pontoTuristicoCentroSP = texto.indexOf("Sé");
console.log(pontoTuristicoCentroSP);

let centroSP = texto.slice(371, 416);
alert(`Os pontos turísticos localizados no Centro da cidade de São Paulo são: ${centroSP}`);

console.log("busca dos pontos turísticos localizados em Downtown");
let pontoTuristicoDowntown = texto.indexOf("Fremont");
console.log(pontoTuristicoDowntown);

let downtown = texto.slice(943, 1009);
alert(`Os pontos turísticos localizados em Las Vegas no Bairro de Downtown são: ${downtown}`);

