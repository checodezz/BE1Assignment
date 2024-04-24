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
// createNewCar(carData);

const carData2 = {
  brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg",
  ],
};

// createNewCar(carData2);

//3. Create a function to read all cars from the database. Console all the cars. Use proper function and variable names.

async function readAllCars() {
  try {
    const cars = await Car.find();
    console.log("All Cars:", cars);
  } catch (error) {
    throw error;
  }
}
// readAllCars();

// 4. Create a function to read cars by brand ("Ford"). Console the car details. Use proper function and variable names.

async function carsByBrand(brand) {
  try {
    const cars = await Car.findOne({ brand: brand });
    console.log(cars);
  } catch (error) {
    throw error;
  }
}
// carsByBrand("Ford");

//5. Create a function to read cars by color ("Black"). Console the car details. Use proper function and variable names.

async function carsByColor(color) {
  try {
    const cars = await Car.find({ color: color });
    console.log(cars);
  } catch (error) {
    throw error;
  }
}
// carsByColor("Black");

//6. Create a function to update the price of a car with model "Corolla". Update the price to 2300000. Console the car with updated price.

async function updateCar(model, price) {
  try {
    const updatedCar = await Car.findOneAndUpdate(
      { model: model },
      { price: price },
      { new: true },
    );
    console.log("Updated Car: ", updatedCar);
  } catch (error) {
    throw error;
  }
}
// updateCar("Corolla", 2300000)

//7. Create a function to update the condition of a car with model "Model S". Update the condition to "Used". Console the car with updated condition.

async function updateCondition(model, condition) {
  try {
    const updatedCar = await Car.findOneAndUpdate(
      { model: model },
      { condition: condition },
      { new: true },
    );
    console.log("updated Car", updatedCar);
  } catch (error) {
    throw error;
  }
}

// updateCondition("Model S", "Used");

//8. Create a function to delete a car by ID. Take the id of the car brand Tesla from the database and delete that car record. Console the deleted car data.

//6624a7814a06672e33e652e0

async function deleteCarById(id) {
  try {
    const deletedCar = await Car.findByIdAndDelete(id);
    console.log("Deleted car:", deletedCar);
  } catch (error) {
    throw error;
  }
}
// deleteCarById("6624a7814a06672e33e652e0");

//9. Create a function to delete a car by its body style. Delete the car data with body style "Coupe" from the database console the deleted car data.

async function deleteCar(body) {
  try {
    const deletedcar = await Car.findOneAndDelete({ bodyStyle: body });
    console.log(deletedcar);
  } catch (error) {
    throw error;
  }
}


deleteCar("Coupe");
