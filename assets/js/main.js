$('#restart').click(function() {
  majo.restart();
})

const RED = './img/red.png';
const GREEN = './img/green.png';
const BLUE = './img/blue.png';
const YELLOW = './img/yellow.png';
const BACK = './img/back.jpg';

class Majo {
  constructor() {
    this.map = [];
    this.panel = $('#panel');
  }
  
  restart() {
    const colors = [RED, GREEN, BLUE, YELLOW];
    const needs = [];
    for (let i = 0; i < 16; i++) {
      needs.push(colors[i % 4]);
    }

    this.map = needs.sort((a, b) => Math.random() >= 0.5 ? 1 : -1);
    this.render();
  }

  render() {
    this.panel.find('div').remove();

    for (let i = 0; i < 4; i++) {
      const row = document.createElement('div');

      for (let j = 0; j < 4; j++) {
        const el = document.createElement('img');
        el.src = this.map[i * 4 + j];
        $(row).append(el);

        $(el).click(function() {
          const that = this;
          const oldSrc = $(this).attr('src');
          const className = `roll-${j}`;
          
          $(that).addClass(className);
          setTimeout(() => {
            $(that).attr('src', BACK);
            $(that).removeClass(className);
          }, 200);

        })
      }

      this.panel.append(row);
    }
  }
}

const majo = new Majo();
majo.restart();