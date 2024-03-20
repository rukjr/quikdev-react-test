
# Quikdev Front-End Project

## Stack Utilizada

Este projeto foi desenvolvido com foco em práticas modernas e recomendadas para aplicações web front-end, priorizando a usabilidade, performance e manutenibilidade do código.

### Tecnologias Principais

- **React**: Versão 18.2.0 - Uma biblioteca JavaScript para construção de interfaces de usuário, escolhida pela sua vasta adoção na comunidade, flexibilidade e eficiente atualização de UI.
- **TypeScript**: Versão 5.2.2 - Utilizado para adicionar tipagem estática ao projeto, melhorando a qualidade do código e facilitando a manutenção e desenvolvimento colaborativo.
- **Vite**: Versão 5.1.6 - Um moderno empacotador de módulos para projetos JavaScript, escolhido por sua rapidez e simplicidade, melhorando significativamente o tempo de desenvolvimento.
- **Bootstrap**: Versão 5.3.3 - Framework CSS para desenvolvimento de componentes de interface e layouts responsivos de forma ágil e consistente.

### Gerenciamento de Estado

- **Context API**: Utilizada para o gerenciamento de estados globais, como dados de autenticação do usuário, visando uma solução mais leve e integrada ao React sem a necessidade de bibliotecas externas adicionais.

### Ferramentas de Desenvolvimento

- **ESLint**: Para garantir a conformidade do código com as boas práticas e padrões estabelecidos.
- **TypeScript ESLint**: Para integração do ESLint com TypeScript, assegurando uma análise estática eficaz em um ambiente tipado.

## Como Executar o Sistema

Antes de iniciar o front-end, é crucial configurar o ambiente para assegurar a conexão correta com o back-end do Quikdev Project. Siga os passos abaixo para configurar e executar o sistema de forma integrada:

1. **Configuração do Ambiente**:
   - Certifique-se de ter o Node.js instalado (preferencialmente a mesma versão ou superior à usada no back-end, 18.17.1).
   - Clone o repositório do front-end e acesse o diretório do projeto.
   - Crie um arquivo `.env` na raiz do diretório do front-end.
   - Adicione a seguinte variável ao arquivo `.env`, substituindo o valor de `VITE_API_BASE_URL` pelo endereço onde seu back-end está rodando (por padrão, `http://localhost:3000/` se estiver executando localmente):
     ```
     VITE_API_BASE_URL="http://localhost:3000/"
     ```
   Este passo é crucial para que o front-end saiba onde solicitar os recursos do back-end, permitindo que ambos os lados do projeto se comuniquem efetivamente.

2. **Instalação de Dependências**:
   - Execute `npm install` para instalar as dependências do projeto.

3. **Desenvolvimento**:
   - Para iniciar o servidor de desenvolvimento, execute `npm run dev`. O projeto estará acessível em `http://localhost:3000`.
   - Este passo permite visualizar e desenvolver o front-end em tempo real, interagindo com o back-end configurado.

4. **Build para Produção** (Opcional):
   - Para construir o projeto para produção, execute `npm run build`. Os arquivos de produção serão gerados no diretório `dist`.
   - Esta etapa prepara o aplicativo para ser hospedado e servido em um ambiente de produção.

## Motivação e Escolhas

O desenvolvimento deste front-end para o Quikdev Project visou não apenas complementar o back-end criado anteriormente, mas também demonstrar conhecimentos em práticas de desenvolvimento front-end moderno. A escolha de React e Context API reflete uma preferência por soluções amplamente adotadas e com comunidade ativa, além de permitir um gerenciamento de estado simplificado e eficaz.

Adotou-se TypeScript para melhorar a manutenibilidade e qualidade do código, seguindo princípios de Clean Architecture e S.O.L.I.D adaptados ao contexto do desenvolvimento front-end. A decisão de utilizar Vite como bundler visa explorar as mais recentes otimizações em termos de tempo de desenvolvimento e eficiência de build.
