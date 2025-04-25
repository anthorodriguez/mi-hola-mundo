// index.test.js
// Prueba unitaria para index.html usando Jest y jsdom

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Página Hola Mundo', () => {
  let dom;
  let document;

  beforeAll(() => {
    const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  test('El título principal debe decir "Hola Mundo"', () => {
    const h1 = document.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1.textContent.trim()).toBe('Hola Mundo');
  });

  test('Debe haber una sección de iconos', () => {
    const iconsDiv = document.querySelector('.icons');
    expect(iconsDiv).not.toBeNull();
    const icons = iconsDiv.querySelectorAll('i');
    expect(icons.length).toBeGreaterThanOrEqual(5);
  });

  test('El archivo CSS externo está enlazado', () => {
    const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    const hasEstilo = links.some(link => link.getAttribute('href') === 'estilo.css');
    expect(hasEstilo).toBe(true);
  });
});
