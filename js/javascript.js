function HotWheelsCar(brand, model, color, material, dimensions, weight, features, year, packageType, price, ageRange) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.material = material;
    this.dimensions = dimensions;
    this.weight = weight;
    this.features = features;
    this.year = year;
    this.packageType = packageType;
    this.price = price;
    this.ageRange = ageRange;
}
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('hotwheels-container');

    // Create instances of HotWheelsCar
    const car1 = new HotWheelsCar("Hot Wheels", "RAM 1500 REBEL", "White", "Metal", "2.5x1x1 inches", "0.1 lbs", "Rolling wheels, Opening doors", 2020, "Blister pack", 5.99, "3-10 years");

    // Display information on the HTML page
    displayCarInfo(container, car1);
});

// Function to display car information on the HTML page
function displayCarInfo(container, car) {
    const carDiv = document.createElement('div');
    carDiv.classList.add('car-info');

    const carInfo = `<p>Brand:${car.brand}</p>
                     <p>Model: ${car.model}</p>
                     <p>Color: ${car.color}</p>
                     <p>Dimensions: ${car.dimensions}</p>
                     <p>Weight: ${car.weight}</p>
                     <p>Features: ${car.features}</p>
                     <p>Year: ${car.year}</p>      
                     <p>Price: ${car.price}</p>`;

    carDiv.innerHTML = carInfo;
    container.appendChild(carDiv);
}