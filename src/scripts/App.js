import Builder from './Builder';

export default class App {
    constructor(id) {
        this.root = document.getElementById(id);

        if (!this.root) throw new Error('Не могу найти рутовый элемент.')

        this._builder = new Builder();

        this.init();
    }

    /**
     * Общение с серверов
     */
    init() {
        fetch('http://localhost:3000/data')
            .then(r => r.json())
            .then(data => {
                if (data[0].result !== 'ok') throw new Error('Не удалось получить данные.')

                this.insertContent(this._builder.getMainMenu(data[0].tarifs));
            })
    }

    insertContent(content) {
        this.root.innerHTML = '';

        this.root.appendChild(content);
    }
}
