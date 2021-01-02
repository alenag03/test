const speedColors = {
    'Земля': 'red',
}

export default class Builder {
    getMainMenu(tarifs) {
        const main = document.createElement('article');

        tarifs.forEach((tarif) => {
            const div = document.createElement('div');
            const title = document.createElement('h3');
            title.classList.add('tarif-title');
            title.classList.add(speedColors[tarif.title]);
            title.textContent = tarif.title;

            div.appendChild(title);

            main.appendChild(div);
        })

        return main;
    }
}
