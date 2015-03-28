---
layout: post
title: "Sobre engines, motores de jogos, e frameworks"
excerpt: "Visão geral sobre construção de engines, motores de jogos, e uso de frameworks para jogos"
modified: 2015-03-24
tags: [engines, motores de jogos, frameworks]
comments: true
---

*Se está com pressa vá para [Resumo](#resumo).*  
  *Se deseja saber mais veja [Tópicos avançados](#avançados).*  
  
Muitos desenvolvedores, principalmente os iniciantes, esbarram numa grande dificuldade na hora de escolher qual tecnologia utilizar para desenvolver seus jogos.  

Aqueles com maior conhecimento em programação tendem a escolher dentre as *engines* disponíveis mais adequadas para sua linguagem preferida; por outro lado, os desenvolvedores mais astuciosos buscam aprender novas linguagens para se adequarem ao mercado; enquanto os que possuem um conhecimento mais limitado em programação se agarram a frameworks visuais com a promessa de desenvolvimento rápido e fácil.

### Mas afinal, qual o objetivo de uma Engine?

De forma concisa: facilitar a programação, principalmente na manipulação gráfica de mais baixo nível, em questões de manipulação dos elementos do jogo ou no tratamento de mecânicas físicas (como movimentação, colisão, etc).

O principal intuito de uma engine, ou no português motor de jogo, é desenvolver uma boa base para que o programador perca menos tempo com estruturas de programação (sic) e se preocupe mais com as propriedades da lógica do seu programa. Em outras palavras: se preocupe mais com o design e narrativa do seu jogo e menos com otimização de gráficos e elaboração de algoritmos.

### Qual a diferença entre uma Engine e uma Framework?

As frameworks para desenvolvimento de jogos são ferramentas que combinam uma engine para jogos com um ambiente de desenvolvimento (IDE) mais elaborado. 

Em geral, ao trabalhar com um framework o desenvolvedor não lida diretamente com o código da engine. Essas ferramentas trabalham com um ambiente de manipulação drag-and-drop que torna a interação mais agradável para o usuário e utilizam scripts interpretados que são posteriormente transformados em código como, por exemplo, é o caso dos blueprints da engine Unreal.

<figure>
  <a href="/images/unreal-blueprints.jpg"><img src="/images/unreal-blueprints.jpg"></a>
  <figcaption text-align="center">Blueprints no Unreal Engine.</figcaption>
</figure>

Umas das principais características de um framework é a distribuição multiplataforma, permitindo que o desenvolvedor crie o seu jogo apenas uma vez e publique em várias das plataformas disponíveis no mercado. Como é o caso do Unity 3D, que permite exportar um jogo para mais de 21 plataformas diferentes, dentre elas: iOS, Android, PS4, Xbox One e WiiU.

Essas ferramentas frequentemente funcionam como powerhouse gráficas – em geral, as interações com a máquina e placas de vídeo já foram arduamente testadas e otimizadas, como a alocação de memória, carregar arquivos e imagens, iluminação etc – e também como ambientes de desenvolvimento multitarefas, embutindo editores gráficos (para imagens e animações) e de som. 

Mas então, quais são as desvantagens de se utilizar um *framework*? 

Infelizmente algumas, dentre as quais:

**1. Curva de aprendizado dessas tecnologias é muito alta.** Se um jogo é pequeno ou simples demais, geralmente os custos de se aprender e utilizar um framework pode não valer a pena o tempo investido em comparação a construir o código você mesmo. Por exemplo, um dos problemas do Unity para desenvolvimento 2D é que ele carrega boa parte do overhead do 3D, sobrecarregando o usuário com funcionalidades desnecessárias.

**2. Frequentemente não há acesso ao código da engine.** Desenvolvedores mais experientes podem sentir a necessidade de realizar adaptações ou acrescentar informação em mais baixo nível e se tornam impossibilitados pelo framework.

**3. Geralmente são desenvolvidas para uma tarefa mais abrangente.** Em teoria, é menos eficiente utilizar uma framework de propósito geral do que desenvolver especificamente para seu jogo.

**4. Não são de sua propriedade.** Geralmente não são gratuitas e cobram royalties sobre os jogos desenvolvidos. Além disso, por serem um sistema terceirizado, se existe um bug na engine – a não ser que o framework seja opensource – você não poderá consertá-lo.

<figure>
  <a href="/images/construct-2.jpg"><img src="/images/construct-2.jpg"></a>
  <figcaption>Construct 2 para desenvolvimentos de jogos 2D.</figcaption>
</figure>

De uma forma geral, quando o tempo gasto codificando os sistemas que você precisa é muito maior que seu deadline, ou se você tem mais habilidades com design e arte do que com código, utilizar uma framework pode ser uma ótima ideia. 

Por outro lado, caso seu jogo tenha características muito específicas, seja muito simples de codificar ou, por ventura, suas habilidades de desenvolvimento não sejam um problema, então talvez seja interessante deixar os frameworks de lado e pensar em utilizar uma engine própria ou alguma das várias já existentes.

<figure>
  <a href="/images/unity-2.jpg"><img src="/images/unity-2.jpg"></a>
  <figcaption>Unity 3D.</figcaption>
</figure>

### Fazer sua própria engine ou utilizar uma existente?

Com uma ideia em mente, a dúvida que surge é: quando começar a construção de uma engine do zero ou quando utilizar o código já existente de outra pessoa? A primeira vista, as possibilidades de engines e frameworks como o Unity 3D ou Unreal parecem suficientes para qualquer tipo de jogo, e mesmo que não, você pode adaptar o código de boa parte das engines existentes para satisfazer suas próprias necessidades. Mas se pararmos para observar, a maioria das grandes desenvolvedoras preferem criar suas próprias engines: Sierra possui sua própria engine, Crytek também, Valve, Ubisoft, Rockstar, Square Enix, e por aí a lista continua.

Por que isso ocorre? Por que produzir uma engine se as existentes são tao boas?

A princípio, por mais óbvio que pareça, as pessoas constroem suas próprias engines simplesmente porque alguém tem de fazê-lo. No fim das contas, as engines dedicadas de hoje se tornam os frameworks licenciados do futuro. Por exemplo, hoje em dia quando pensamos no Unreal ou CryEngine temos a ideia de engines gigantescas que você pode licenciar e utilizar ao invés de construir a sua própria, mas nem sempre foi esse o caso. Um estúdio de desenvolvimento de jogos pode ter começado a construir seu próprio conjunto de ferramentas antes mesmo de existir uma engine viável para sua necessidade em específico.
Como o caso do Unreal, a engine surgiu do jogo de tiro de mesmo nome (futuramente Unreal Tournament). Os desenvolvedores decidiram criar uma engine própria em vez de utilizar uma existente e ao longo dos anos foram aprimorando seu produto até obtermos a engine como conhecemos hoje.

<figure>
  <a href="/images/unreal-tournament.jpg"><img src="/images/unreal-tournament.jpg"></a>
  <figcaption>Unreal Tournament (1999).</figcaption>
</figure>

Vale notar que, no passado, quando jogos como o Unreal foram primeiramente construídos, simplesmente não existiam outras opções se não escrever tudo do zero. Foi apenas nos últimos anos que começamos a obter n opções de engines para escolhermos.

Além disso, podemos apontar alguns motivos para um desenvolvedor de jogos escolher construir ao invés de comprar sua tecnologia:

**1. Você não deve fazer sua própria tecnologia a não ser que você precise fazer sua própria tecnologia.** Em determinadas situações, um desenvolvedor, ou mesmo um estúdio, pode ter um conjunto particular de requisitos que não são satisfeitos pelos middlewares existentes (seja engine ou framework), por exemplo: suporte a um tipo específico de iluminação para dispositivos móveis, ou compatibilidade com um programa específico de modelagem como o Maya, dentre outros.

**2. Sua afinidade com programação.** Varia de *“eu não gosto/não sei/odeio codificar”* até *“eu quero poder entender e mexer com todas as variáveis e a física da minha engine para alcançar um objetivo/efeito específico”*. Na maioria dos casos, se você está se perguntando se deve ou não fazer sua própria engine, então provavelmente você se daria bem melhor indo com uma engine já existente.

**3. O quanto você está disposto a investir.** Muitas vezes, pode não ser possível ou sua equipe pode não estar disposta a arcar com as despesas e/ou obrigações contratuais das engines existentes.

Desenvolver sua própria tecnologia para um jogo de baixo orçamento dificilmente vale o esforço: o tanto de poder que as engines de hoje em dia oferecem é mais que suficiente. Você não está em condições de superar, digamos, o que Unity 5 tem a oferecer por U$1.500, ou o que a maioria das outras engines gratuitas têm a oferecer, bem, de graça.

**4. A complexidade das mecânicas que você deseja integrar.** Se você possui um conjunto de funcionalidades conhecidas, de modo que possa facilmente escolher entre uma das engines existentes, então ótimo.

Por outro lado, se nenhuma engine do mercado fornece a tecnologia específica que você necessita para seu jogo, então provavelmente você terá de desenvolver seu próprio produto. Isso não quer dizer, no entanto, que você deva jogar fora qualquer outro middleware existente no mercado: só porque você precisa do seu próprio, digamos, renderizador, não quer dizer que você não possa utilizar uma física ou o sistema de som ou a UI ou qualquer coisa que seja de outra engine.

**5. Síndrome do *“não foi feito aqui”* (ou not built here syndrome).** Construir sua própria engine dá ao desenvolvedor ou equipe um controle muito maior em cima dos seus produtos. Geralmente, os desenvolvedores estão cientes das dificuldades em lidar com uma tecnologia que eles não construíram e não compreendem completamente.

Em geral, é bom senso possuir ou controlar completamente as coisas que são críticas para o sucesso do seu empreendimento, e terceirizar aqueles que não são. Quando o desenvolvedor licencia uma tecnologia, ele está a merce do licenciador, ficando sujeito a mudanças de contrato, revocar permissões, alterar restrições de produto, dentre outros.

Para alguns estúdios, o design ou roteiro dos jogos é um recurso que eles esperam ser mais crítico para o sucesso. Para esses estúdios, faz mais sentido simplesmente comprar a tecnologia que vão permitir seus designers realizarem essa visão. Para outros, a tecnologia pode ser a fonte do sucesso. Estúdios que constroem MMOs, por exemplo, geralmente vão precisar construir a infraestrutura eles mesmos, por conta do teor crítico dessa estrutura para seu sucesso.

### Então, qual engine devo escolher?

A escolha de uma engine é uma decisão muito subjetiva, apenas você pode determinar dentro da sua necessidade quais são os custos/benefícios de cada uma das opções disponíveis. Você pode se basear em algumas coisas na hora de decidir:

* Quais características específicas o seu jogo **precisa** ter.
* Quais são as **opções disponíveis no mercado** e o que elas tem a oferecer, em termos de **funcionalidades**, e quais suas **limitações**.
* Quão **maduro** e **testado** está.
* Qual a **situação futura** deste middleware, seja engine ou framework: se é uma ferramenta completa ou incompleta, frequentemente atualizada ou descontinuada, etc.
* Que tipo de **suporte a ferramentas** este middleware oferece ou não. Principalmente para ajudar a acelerar o desenvolvimento.

Algumas opções disponíveis são:

<figure>
  <a href="https://cocos2d-x.org/"><img src="/images/cocos2d-logo.jpg"></a>
</figure>

<figure>
  <a href="http://libgdx.badlogicgames.com/"><img src="/images/libgdx-logo.jpg"></a>
</figure>

<figure>
  <a href="http://slick.ninjacave.com/"><img src="/images/slick2d-logo.jpg"></a>
</figure>

<figure>
  <a href="http://www.lwjgl.org/"><img src="/images/lwjgl-logo.jpg"></a>
</figure>

<figure>
  <a href="https://www.libsdl.org/"><img src="/images/sdl-logo.jpg"></a>
</figure>

### [Tópicos avançados] Aprendizado ou time to market?
{:#avançados}

> Desenvolver uma engine é um processo iterativo e trabalhoso.

Desenvolver sua própria engine é uma forma de entender como as coisas funcionam. Criar sua própria engine vai fazer com que você possa dizer que conhece e entende exatamente o que cada componente faz e como eles funcionam. Se você adora escrever software apenas pelo prazer de escrever software, então você vai amar escrever uma engine de jogo.

Muitos desenvolvedores não gostam ou não estão acostumadas a ler o trabalho de outros programadores, especialmente quando se trata de projetos grandes e mal documentados. Voltamos novamente a síndrome do não foi feito aqui: algumas pessoas simplesmente acham mais divertido e prático escrever suas próprias ferramentas do que sentar e ter que lidar com o código de outros.

<figure>
  <a href="/images/tf2.jpg"><img src="/images/tf2.jpg"></a>
</figure>

> Evite utilizar um engine ou framework se seu objetivo principal é aprender pela experiência de implementar os conceitos que são resolvidos pela biblioteca.

No entanto, escrever, por exemplo, uma biblioteca gráfica do zero – utilizando nada além do OpenGL – provavelmente só vai fazer você perder tempo. Isso é um problema relativamente bem-resolvido: você provavelmente vai mudar apenas o formato da API, sem adicionar muitas funcionalidades novas, pelo menos não de uma forma que seja significativa em relação a quaisquer outras soluções já disponíveis por aí.

> Se no momento libGdx, Cocos2D, SDL, ou qualquer outra biblioteca gráfica corresponde aos seus requisitos, então use-a.

Se você tem conhecimento para construir sua própria engine logo de cara, então provavelmente você também pode utilizar uma engine já feita e reestruturar o backend para que se adéque as suas necessidades. A parte difícil é não ficar preso escrevendo infraestruturas e apenas escrever o que você absolutamente precisa para resolver seu problema.

<figure>
  <a href="/images/wow.jpg"><img src="/images/wow.jpg"></a>
</figure>

> Construa seu jogo, permita que suas características/necessidades específicas determine as funcionalidades implementadas pelo código que você vai escrever, e escreva o código com reusabilidade e uma boa arquitetura em mente.

Você naturalmente vai terminar com uma engine em mãos depois de alguns poucos projetos. Além disso, com o tempo você terminará estes projetos cada vez mais rápido, justamente porque você está deixando de se embananar com coisas desnecessárias e tornando o processo de produção de jogos mais dinâmico e iterativo.


### Resumindo, devo construir minha própria engine ou não?
{:#resumo}

No fim das contas, se você está se perguntando isso, então a resposta provavelmente é: **não**.

Desenvolver sua própria engine, em termos de custo/benefício, não é tão vantajoso quanto utilizar uma das populares do mercado. O processo de modificar os mais baixos níveis gráficos, entrando em contato direto com o OpenGL por exemplo, é muito oneroso. A maioria das engines já estão otimizadas para isso.

Se você acredita que tem os conhecimentos necessários, meu conselho é: **utilize uma biblioteca gráfica e a partir daí construa os elementos, entidades e mecânicas da sua engine a partir dos projetos que estiver desenvolvendo**. Inevitavelmente, se você decidir criar seu jogo do zero – e o fizer de uma forma organizada e estruturada – então ao longo do desenvolvimento você provavelmente vai perceber que pode começar a montar sua própria engine a partir do código criado.

Se você é completamente novo nisso, então a dica é: **migre suas tecnologias ao passo que sentir afinidade e necessidade para isso**. Primeiro utilize engines ou frameworks de alto nível para se familiarizar aos conceitos de jogos digitais, depois parta para engines que cubram suas necessidades básicas e que te deixem a vontade para aprimorar seu conteúdo, por fim, siga a dica acima e utilize uma biblioteca gráfica para produzir sua própria engine.