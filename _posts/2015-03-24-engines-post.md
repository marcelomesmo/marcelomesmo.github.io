---
layout: post
title: "Sobre engines, motores de jogos, e frameworks"
excerpt: "Visão geral sobre construção de engines, motores de jogos, e uso de frameworks para jogos"
modified: 2015-03-24
tags: [engines, motores de jogos, frameworks]
comments: true
---

Se você está com pressa pule para {Resumo}.
Se você deseja saber mais veja {Tópicos avançados}.

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
  <figcaption align="center">Blueprints no Unreal Engine.</figcaption>
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

[imagem unity, unreal ou ambas]
<figure>
  <a href="/images/unity-1.png"><img src="/images/unity-1.png"></a>
  <figcaption>Unity 3D.</figcaption>
</figure>

<figure>
  <a href="/images/unity-2.jpg"><img src="/images/unity-2.jpg"></a>
  <figcaption>Unity 3D.</figcaption>
</figure>

## Buttons

Make any link standout more when applying the `.btn` class.

{% highlight html %}
<a href="#" class="btn btn-success">Success Button</a>
{% endhighlight %}

<div markdown="0"><a href="#" class="btn">Primary Button</a></div>
<div markdown="0"><a href="#" class="btn btn-success">Success Button</a></div>
<div markdown="0"><a href="#" class="btn btn-warning">Warning Button</a></div>
<div markdown="0"><a href="#" class="btn btn-danger">Danger Button</a></div>
<div markdown="0"><a href="#" class="btn btn-info">Info Button</a></div>

## Notices

**Watch out!** You can also add notices by appending `{: .notice}` to a paragraph.
{: .notice}
