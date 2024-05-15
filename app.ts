// Function to store information about a car
function createCar(manufacturer: string, model: string, ...options: [string, any][]): object {
    const car: {[key: string]: any} = {
        manufacturer: manufacturer,
        model: model
    };

    // Add optional properties to the car object
    options.forEach(option => {
        const [key, value] = option;
        car[key] = value;
    });

    return car;
}

// Call the function with required information and additional properties
const myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Print the object returned by the function
console.log(myCar);