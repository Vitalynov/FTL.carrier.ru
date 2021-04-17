export class Dropdown {
    constructor(selectorName, options, zi, ziImg) {
        this.$el = document.querySelector(selectorName);
        this.items = options.items;
        this.$el.insertAdjacentHTML('afterbegin', `<img class="arrow ${ziImg}" src="icons/arrow.svg" alt="arrow.svg"> <div class="dropdown__label ${zi}">
        </div><ul class="dropdown__menu ${zi}"></ul>`);
        //console.log(this.items[0]);
        this.$el.querySelector('.dropdown__label').style.color = '#CFCFCF';
        this.$el.querySelector('.dropdown__label').textContent = this.items[0].label;

        this.$el.addEventListener('click', e => {
            const target = e.target;
            if (target.classList.contains('dropdown__label')) {
                if (this.$el.classList.contains('open')) {
                    this.close();
                } else {
                    this.open();
                }
            } else if (target.classList.contains('dropdown__item')) {
                this.select(target.dataset.id);


            }
        });
        const itemsHTML = this.items.map(item => {
            return `<li data-id="${item.id}" class="dropdown__item">${item.label}</li>`
        }).join(' ');

        this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML);

    }
    select(id) {
        const item = this.items.find(item => item.id === id);
        if (item.id === '00') {
            this.$el.querySelector('.dropdown__label').style.color = '#CFCFCF';
        } else {
            this.$el.querySelector('.dropdown__label').style.color = '#000';
        }
        this.$el.querySelector('.dropdown__label').textContent = item.label;
        this.close();
    }

    open() {
        this.$el.classList.add('open');
    }
    close() {
        this.$el.classList.remove('open');
    }

}