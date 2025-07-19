// GravelSync Concept Demo
// 1. Create a single ride object with values for distance, elevation, etc. (Values, Data Types, and Operations)
// 2. Add a method to summarize the ride (Stringing Characters Together + Control Structures and Logic)
// 3. Use an array to store elevation checkpoints (Building Arrays)
// 4. Loop through elevation array to calculate total gain (Working with Loops)
// 5. Use .filter() to find all steep segments (Using Arrays)

// Ride object (Values, Data Types, and Operations)
const ride = {
  trailName: "Katy Trail (Weldon Spring to Washington)",
  distance: 19.4,           // miles
  duration: 1.9,            // hours
  elevationGain: 60,       // feet
  isFavorite: false,         // boolean

  // Ride summary method (Stringing Characters Together + Control Structures and Logic)
  summary: function () {
    let difficulty;
    if (this.elevationGain > 800) {
      difficulty = "Hard";
    } else if (this.elevationGain > 300) {
      difficulty = "Moderate";
    } else {
      difficulty = "Easy";
    }

    return `You rode ${this.distance} miles on ${this.trailName} with ${this.elevationGain} ft elevation. Difficulty: ${difficulty}.`;
  }
};

console.log("Ride Summary:", ride.summary());

// Store elevation checkpoints (Building Arrays)
const elevationPoints = [50, 30, 80, 100, 20, 60]; // feet gained per checkpoint
console.log("Elevation Points:", elevationPoints);

// Add up total elevation gain (Working with Loops)
let totalGain = 0;
for (let i = 0; i < elevationPoints.length; i++) {
  totalGain += elevationPoints[i];
}
console.log("Total elevation gain from segments:", totalGain);

// Find segments that are steep (over 75 ft) (Using Arrays)
const steepSegments = elevationPoints.filter(gain => gain > 75);
console.log("Steep segments (over 75 ft):", steepSegments);
