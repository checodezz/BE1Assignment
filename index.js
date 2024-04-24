const { initializeDatabase } = require("./db/db.connect");
const fs = require("fs");
const Car = require("./models/car.model");

initializeDatabase();

const jsonData = fs.readFileSync("cars.json", "utf8");

const carsData = JSON.parse(jsonData);

function seedData() {
  for (const carData of carsData) {
    const newCar = new Car({
      brand: carData.brand,
      model: carData.model,
      year: carData.year,
      bodyStyle: carData.bodyStyle,
      fuelType: carData.fuelType,
      transmission: carData.transmission,
      mileage: carData.mileage,
      color: carData.color,
      price: carData.price,
      condition: carData.condition,
      description: carData.description,
      photos: carData.photos,
      inMarket: carData.inMarket,
    });
    newCar.save();
    console.log("cars data", newCar.color);
  }
}

// seedData();

const carData = {
  brand: "Ford",
  model: "Mustang",
  year: 2019,
  bodyStyle: "Convertible",
  fuelType: "Gasoline",
  transmission: "Automatic",
  engine: "5.0L V8",
  mileage: 25000,
  color: "Red",
  price: 3500000,
  condition: "Used",
  description: "Exciting Ford Mustang convertible with powerful V8 engine.",
  photos: [
    "https://example.com/mustang-photo1.jpg",
    "https://example.com/mustang-photo2.jpg",
    "https://example.com/mustang-photo3.jpg",
  ],
};

async function createNewCar(carData) {
  try {
    const newCar = new Car(carData);
    const saveCar = await newCar.save();
    console.log("Saved Car:", saveCar);
  } catch (error) {
    throw error;
  }
}
createNewCar(carData);
