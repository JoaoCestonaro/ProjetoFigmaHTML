import { SiJavascript, SiGo, SiRust } from 'react-icons/si'
import { LuBrain } from 'react-icons/lu'
import pythonLogo from '../assets/python-logo.png'
import javaLogo from '../assets/java-logo.png'
import cppLogo from '../assets/cpp-logo.png'

export const courses = [

  {
    id: 'java-profissional',
    title: 'Java para Desenvolvimento Corporativo',
    description:
      'Domine o ecossistema Java criando APIs sólidas, entendendo padrões de projeto e explorando o poder do Spring Framework.',
    duration: '72h',
    tags: ['Back-end', 'Spring', 'Arquitetura'],
    media: { type: 'image', src: javaLogo, alt: 'Logo da linguagem Java' },
  },
  {
    id: 'javascript-spa',
    title: 'JavaScript para Front-end Moderno',
    description:
      'Construa interfaces responsivas dominando JavaScript moderno, componentes reativos e fluxo de desenvolvimento com TypeScript.',
    duration: '55h',
    tags: ['Front-end', 'React', 'TypeScript'],
    media: { type: 'icon', icon: SiJavascript, alt: 'Ícone da linguagem JavaScript' },
  },
  {
    id: 'python-fundamentos',
    title: 'Python Essencial',
    description:
      'Aprenda Python do zero com exercícios voltados para lógica, automações práticas e primeiros passos em análise de dados.',
    duration: '40h',
    tags: ['Programação', 'Dados', 'Automação'],
    media: { type: 'image', src: pythonLogo, alt: 'Logo da linguagem Python' },
  },
  {
    id: 'cmaisplus-performance',
    title: 'C++ Estruturas e Otimização',
    description:
      'Explore recursos avançados do C++, aprenda otimização com memória e desenvolva aplicações de alta eficiência.',
    duration: '45h',
    tags: ['C++', 'Otimização', 'Sistemas'],
    media: { type: 'image', src: cppLogo, alt: 'Logo da linguagem C++' },
  }
]
