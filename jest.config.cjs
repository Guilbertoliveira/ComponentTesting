// jest.config.js
module.exports = {
  preset: 'ts-jest',
  "testEnvironment": "jest-environment-jsdom",
  // Outras opções de configuração
  "moduleNameMapper": { //configuração responsavel por pegar sempre o css vazio e nao dar conflito
    "\\.(css|less|scss)$": "<rootDir>/src/pages/__mocks__/App.css",
  }
};
