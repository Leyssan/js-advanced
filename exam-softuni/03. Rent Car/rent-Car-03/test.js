const rentCar = require('./rentCar')
const { expect } = require('chai')

describe('RentCar tests', () => {
    describe('searchCar testing', () => {
        it('Throw error when first parameter is string', () => {
            expect(() => rentCar.searchCar('wrong input', 'model')).to.throw('Invalid input!');
        });
        it('Throw error when first parameter is undefined', () => {
            expect(() => rentCar.searchCar(undefined, 'model')).to.throw('Invalid input!');
        });
        it('Throw error when second parameter is undefined', () => {
            expect(() => rentCar.searchCar(['Volkswagen', 'Audi'], undefined)).to.throw('Invalid input!');
        });
        it('Throw error when first parameter is null', () => {
            expect(() => rentCar.searchCar(null, 'string')).to.throw('Invalid input!');
        });
        it('Throw error when first parameter is number', () => {
            expect(() => rentCar.searchCar(10, 'string')).to.throw('Invalid input!');
        });
        it('Throw error when second parameter is number', () => {
            expect(() => rentCar.searchCar(['Volkswagen', 'Audi'], 1)).to.throw('Invalid input!');
        });   
        it('Throw error if there are no matching elements', () => {
            expect(() => rentCar.searchCar(['Volkswagen', 'Audi'], 'BMV')).to.throw('There are no such models in the catalog!');
        }); 
        it('There is  car of model in the catalog', () => {
            expect(rentCar.searchCar(['Volkswagen', 'Audi'], 'Audi')).to.equal('There is 1 car of model Audi in the catalog!');
        }); 
        it('Throw error when last parameter is array', () => {
            expect(() => rentCar.searchCar(['Volkswagen', 'Audi'], ['Volkswagen', 'Audi'])).to.throw('Invalid input!');
        });
        it('Throw error when first parameter is object', () => {
            expect(() => rentCar.searchCar({}, 'Audi')).to.throw('Invalid input!');
        });
        it('Throw error when last parameter is object', () => {
            expect(() => rentCar.searchCar(['Volkswagen', 'Audi'], {})).to.throw('Invalid input!');
        });

    });

    describe('calculatePriceOfCar testing', () => {
        it('There is  car of model in the catalog', () => {
            expect(rentCar.calculatePriceOfCar('Volkswagen', 2)).to.equal('You choose Volkswagen and it will cost $40!');
        }); 
        it('Throw error when model does not exist', () => {
            expect(() => rentCar.calculatePriceOfCar('Lada', 2)).to.throw('No such model in the catalog!');
        });
        it('Throw error when second parameter is string', () => {
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', 'day')).to.throw('Invalid input!');
        })
        
        it('Throw error when first parameter is undefined', () => {
            expect(() => rentCar.calculatePriceOfCar(undefined, 2)).to.throw('Invalid input!');
        });
        it('Throw error when second parameter is undefined', () => {
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', undefined)).to.throw('Invalid input!');
        });
        it('Throw error when first parameter is null', () => {
            expect(() => rentCar.calculatePriceOfCar(null, 2)).to.throw('Invalid input!');
        });
        it('Throw error when second parameter is null', () => {
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', null)).to.throw('Invalid input!');
        });
        it('Throw error when first parameter is number', () => {
            expect(() => rentCar.calculatePriceOfCar(10, 2)).to.throw('Invalid input!');
        });
        it('Throw error when first parameter is array', () => {
            expect(() => rentCar.calculatePriceOfCar(['Volkswagen', 'Audi'], 2)).to.throw('Invalid input!');
        });
        it('Throw error when last parameter is array', () => {
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', [1, 2])).to.throw('Invalid input!');
        });
        it('Throw error when first parameter is object', () => {
            expect(() => rentCar.calculatePriceOfCar({}, 2)).to.throw('Invalid input!');
        });
        it('Throw error when last parameter is object', () => {
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', {})).to.throw('Invalid input!');
        });
          
    })

    describe('checkBudget testing', () => {
        //(costPerDay, days, budget) 
        it('Return if the budget is bigger  to cost', () => {
            expect(rentCar.checkBudget(10, 2, 30)).to.equal('You rent a car!');
        }); 
        it('Return if the budget is equal to cost', () => {
            expect(rentCar.checkBudget(10, 2, 20)).to.equal('You rent a car!');
        }); 
        it('Return if the budget is less than cost', () => {
            expect(rentCar.checkBudget(10, 2, 10)).to.equal('You need a bigger budget!');
        });

        it('Throw error when 1 parameter is string', () => {
            expect(() => rentCar.checkBudget('Volkswagen', 2, 30)).to.throw('Invalid input!');
        })
        it('Throw error when 2 parameter is string', () => {
            expect(() => rentCar.checkBudget(10,'Volkswagen', 30)).to.throw('Invalid input!');
        })
        it('Throw error when 3 parameter is string', () => {
            expect(() => rentCar.checkBudget(10, 2,'Volkswagen')).to.throw('Invalid input!');
        })

        it('Throw error when 1 parameter is undefined', () => {
            expect(() => rentCar.checkBudget(undefined, 2, 30)).to.throw('Invalid input!');
        })
        it('Throw error when 2 parameter is undefined', () => {
            expect(() => rentCar.checkBudget(10,undefined, 30)).to.throw('Invalid input!');
        })
        it('Throw error when 3 parameter is undefined', () => {
            expect(() => rentCar.checkBudget(10, 2, undefined)).to.throw('Invalid input!');
        })

        it('Throw error when 1 parameter is array', () => {
            expect(() => rentCar.checkBudget([10,20], 2, 30)).to.throw('Invalid input!');
        })
        it('Throw error when 2 parameter is array', () => {
            expect(() => rentCar.checkBudget(10,[10,20], 30)).to.throw('Invalid input!');
        })
        it('Throw error when 3 parameter is array', () => {
            expect(() => rentCar.checkBudget(10, 2, [10,20])).to.throw('Invalid input!');
        })

        it('Throw error when 1 parameter is object', () => {
            expect(() => rentCar.checkBudget({}, 2, 30)).to.throw('Invalid input!');
        })
        it('Throw error when 2 parameter is object', () => {
            expect(() => rentCar.checkBudget(10,{}, 30)).to.throw('Invalid input!');
        })
        it('Throw error when 3 parameter is object', () => {
            expect(() => rentCar.checkBudget(10, 2, {})).to.throw('Invalid input!');
        })

        it('Throw error when 1 parameter is null', () => {
            expect(() => rentCar.checkBudget(null, 2, 30)).to.throw('Invalid input!');
        })
        it('Throw error when 2 parameter is null', () => {
            expect(() => rentCar.checkBudget(10,null, 30)).to.throw('Invalid input!');
        })
        it('Throw error when 3 parameter is null', () => {
            expect(() => rentCar.checkBudget(10, 2, null)).to.throw('Invalid input!');
        })   

    })

    

});
