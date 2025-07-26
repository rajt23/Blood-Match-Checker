const BloodType = require("./models/BloodType");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blood_match_db");

const bloodTypes = [
  {
    bloodGroup: "O-",
    canDonateTo: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
    canReceiveFrom: ["O-"],
    description: "Universal donor (can donate to any blood type)"
  },
  {
    bloodGroup: "O+",
    canDonateTo: ["O+", "A+", "B+", "AB+"],
    canReceiveFrom: ["O-", "O+"],
    description: "Can donate to O+, A+, B+, AB+"
  },
  {
    bloodGroup: "A-",
    canDonateTo: ["A-", "A+", "AB-", "AB+"],
    canReceiveFrom: ["O-", "A-"],
    description: "Can donate to A+, A-, AB+, AB-"
  },
  {
    bloodGroup: "A+",
    canDonateTo: ["A+", "AB+"],
    canReceiveFrom: ["O-", "O+", "A-", "A+"],
    description: "Can donate to A+, AB+"
  },
  {
    bloodGroup: "B-",
    canDonateTo: ["B-", "B+", "AB-", "AB+"],
    canReceiveFrom: ["O-", "B-"],
    description: "Can donate to B+, B-, AB+, AB-"
  },
  {
    bloodGroup: "B+",
    canDonateTo: ["B+", "AB+"],
    canReceiveFrom: ["O-", "O+", "B-", "B+"],
    description: "Can donate to B+, AB+"
  },
  {
    bloodGroup: "AB-",
    canDonateTo: ["AB-", "AB+"],
    canReceiveFrom: ["O-", "A-", "B-", "AB-"],
    description: "Can donate to AB+, AB-"
  },
  {
    bloodGroup: "AB+",
    canDonateTo: ["AB+"],
    canReceiveFrom: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
    description: "Universal recipient (can receive from any blood type)"
  }
];

BloodType.insertMany(bloodTypes)
  .then(() => {
    console.log("Blood types seeded successfully!");
    mongoose.connection.close();
  })
  .catch((err) => console.error("Error seeding data:", err));