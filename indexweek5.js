class Car {
    constructor(make, model, year, accessories) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.accessories = accessories;
    }
    describe() {
        return `${this.make} and ${this.model} and ${this.year} has ${this.accessories},`;
    }
}

class Dealer {
    constructor(name) {
        this.name = name;
        this.location = [];
    }

    
    addCar(car) {
        if(car instanceof Car) {
        this.players.push(car);
    } else {
        throw new Error(`N/A: ${car}`);

    }
}  
    describe() {
        return `${this.name} is in ${this.location.length}.`;
    }
}

class Menu {
    constructor() {
        this.cars = [];
        this.selectedCar = null;
    }

    start() {
        let selection = this.showMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.selectMakeAndModel();
                    break;
                case '2':
                    this.selectCarDealer();
                    break;
                case '3':
                    this.selectAccessories();
                    break;
                case '4':
                    this.displayCars();
                    break;
                case '5':
                    this.deleteSelection();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMenuOptions();
        }
        alert(`Goodbye!`);
    }

    showMenuOptions() {
        return prompt(`
            0) exit
            1) select make and model
            2) select car dealer
            3) select accessories
            4) display cars
            5) delete selection
        
        `);
    }

    displayCars() {
        let carString = '';
        for (let i = 0; i < this.cars.length; i++) {
            carString += i + `)` + this.cars[i].name + '\n';
        }
        alert(carString);
    }

    selectCarDealer() {
        let name = prompt(`Select car dealer`);
        this.location.push(new Dealer(name));

    }
    selectMakeandModel() {
        let index = prompt('Enter make and then enter model:');
        if(index > -1 && index < this.cars.length) {
            this.selectedCar = this.car[index];
            let description = 'Car Name:' + this.selectedCar.name + `\n`;

            for (let i = 0; i < this.selectedCar.make.length; i++) {
                description += i + `)` + this.selectedCar.make[i].model + ' - ' + this.selectedCar.make[i].year + `\n`;
            }
            
             
        }
    }
}

let menu = new Menu();
menu.start();
