class CarDealership {
    constructor(name, availableCars, soldCars, totalIncom) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0
    }

    addCar(model, horsepower, price, mileage) {
        let addCars = {
            model,
            horsepower,
            price,
            mileage,
        }

        if (model === '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error(`Invalid input!`);
        } 
            this.availableCars.push(addCars)
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
        
    }

    sellCar(model, desiredMileage) {
        let currentCars = this.availableCars.find(x => x.model === model)

        let diffMileage = currentCars.mileage - desiredMileage

        if (diffMileage <= 40000 && diffMileage > 0) {
            currentCars.price = currentCars.price * 0.95
        } else if (diffMileage > 40000) {
            currentCars.price = currentCars.price * 0.90
        }

        this.soldCars.push({
            model: currentCars.model,
            horsepower: currentCars.horsepower,
            soldPrice: currentCars.price
        })

        this.availableCars.filter((x => x.model != model))

        this.totalIncome += currentCars.price   
       
       
        if (!this.availableCars.some(x => x.model == model)) {
            throw new Error(`${model} was not found!`)
        } else {
            return `${model} was sold for ${currentCars.price.toFixed(2)}$`
        }

    }

    currentCar () {
let result = []
if (!this.availableCars.length) {
 return "There are no available cars"
} else {
result.push('-Available cars:');
this.availableCars.forEach(x => {
    result.push(`---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`);
});
return result.join('\n')
}
    }

    salesReport (criteria) {
        switch (criteria) {
            case 'horsepower':
                this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
                break;
            case 'model':
                this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
                break;
            default:
                throw new Error('Invalid criteria!');
        }

       let res = []
       res.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`)
       res.push(`-${this.soldCars.length} cars sold:`)
       this.soldCars.forEach(x => {
        res.push(`---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`);
    })
       return res.join('\n')

    }



}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));