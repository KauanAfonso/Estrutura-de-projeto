# Configurando Webpack e Babel para JS e CSS

Este README serve como um guia para configurar o Webpack e o Babel para compilar arquivos JavaScript e CSS, gerando arquivos minificados prontos para produção.

---

## Requisitos
- Node.js instalado (versão mais recente recomendada).
- NPM ou Yarn instalado.

---

## Passo 1: Inicializar um Projeto Node.js
Crie uma pasta para o projeto e inicialize o Node.js:

```bash
mkdir meu-projeto
cd meu-projeto
npm init -y
```
Isso criará um arquivo `package.json` básico.

---

## Passo 2: Instalar Webpack e Babel

### Instalar Webpack e Webpack CLI:
```bash
npm install webpack webpack-cli --save-dev
```

### Instalar Babel e loaders necessários:
```bash
npm install @babel/core @babel/preset-env babel-loader --save-dev
```

### Instalar plugins e loaders para CSS:
```bash
npm install mini-css-extract-plugin css-loader --save-dev
```

### (Opcional) Instalar plugin de minificação de CSS:
```bash
npm install css-minimizer-webpack-plugin --save-dev
```

---

## Passo 3: Estrutura do Projeto

Crie a seguinte estrutura de pastas e arquivos:
```
meu-projeto/
|-- src/
|   |-- index.js
|   |-- style.css
|-- dist/
|-- webpack.config.js
|-- package.json
```

- `src/` é onde o código fonte fica.
- `dist/` é onde o Webpack vai gerar os arquivos finais.
- `webpack.config.js` é o arquivo de configuração do Webpack.

---

## Passo 4: Criar Configuração do Webpack (`webpack.config.js`)

```javascript
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',  // Arquivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'  // Saída JS com nome dinâmico e .min
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Processar arquivos JS
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,  // Processar arquivos CSS
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css'  // Saída CSS com nome dinâmico
    })
  ],
  mode: 'production',  // Modo produção (minifica JS e CSS)
  optimization: {
    minimize: true  // Ativa minificação
  }
};
```

---

## Passo 5: Configuração do Babel (`.babelrc`)
Crie o arquivo `.babelrc` na raiz do projeto:

```json
{
  "presets": ["@babel/preset-env"]
}
```

---

## Passo 6: Criar Arquivos de Teste

### Criar `src/index.js`:
```javascript
import './style.css';

console.log('Webpack compilando JS e CSS!');
```

### Criar `src/style.css`:
```css
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: black;
  color: aliceblue;
}

h1 {
  padding: 10px;
}
```

---

## Passo 7: Adicionar Scripts de Build
Abra o `package.json` e adicione o seguinte script:

```json
"scripts": {
  "build": "webpack"
}
```

---

## Passo 8: Compilar o Projeto

Rode o comando para gerar os arquivos finais:
```bash
npm run build
```

Isso gerará:
```
dist/
|-- main.min.js
|-- main.min.css
```

---

## Conclusão
Agora você tem uma configuração completa do Webpack que processa JavaScript com Babel e CSS, gerando arquivos minificados prontos para produção.

Sempre que precisar modificar seu projeto, basta editar o `index.js` ou `style.css`, rodar `npm run build` e o Webpack cuidará do resto.

