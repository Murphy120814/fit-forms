function lifeStyleMultiplierCalculator(lifeStyle) {
  const lifeStyleObj = {
    Sedentary: 1.2 + Math.random() * 0.3,
    "Lightly Active": 1.5 + Math.random() * 0.3,
    "Moderately Active": 1.8 + Math.random() * 0.3,
    "Highly Active": 2.1 + Math.random() * 0.3,
  };
  return lifeStyleObj[lifeStyle];
}

function calculatingBMR(sex, weight, age, height) {
  if (sex === "Male") {
    return parseInt(10 * parseFloat(weight) + 6.25 * height - (5 * age + 5));
  } else {
    return parseInt(10 * parseFloat(weight) + 6.25 * height - (5 * age + 161));
  }
}

function calculatingBMI(weight, height) {
  return parseInt(parseFloat((weight * 2.2) / (height / 2.54) ** 2) * 703);
}

function calculatingBodyFat(sex, age, bmiReading) {
  if (sex === "Male") {
    return parseInt(1.2 * bmiReading + 0.23 * age - 14.2);
  } else {
    return parseInt(1.2 * bmiReading + 0.23 * age - 5.4);
  }
}

function calculatingMaintenanceCalories(bmr, lifeStyleMultiplier) {
  return bmr * lifeStyleMultiplier;
}

function calculatingCalorieDeficitOrSurplus(
  workExp,
  bodyFat,
  maintenanceCalories
) {
  if (workExp === "Beginner") {
    if (bodyFat < 15) {
      return maintenanceCalories + 0.35 * maintenanceCalories;
    } else if (bodyFat > 20) {
      return maintenanceCalories - 0.3 * maintenanceCalories;
    } else return maintenanceCalories;
  } else if (workExp === "Intermediate") {
    if (bodyFat < 15) {
      return maintenanceCalories + 0.2 * maintenanceCalories;
    } else if (bodyFat > 20) {
      return maintenanceCalories - 0.3 * maintenanceCalories;
    } else return maintenanceCalories;
  } else if (workExp === "Advance") {
    if (bodyFat < 15) {
      return maintenanceCalories + 0.15 * maintenanceCalories;
    } else if (bodyFat > 20) {
      return maintenanceCalories - 0.25 * maintenanceCalories;
    } else return maintenanceCalories;
  }
}

function calculatingProtein(bodyFat, weight) {
  let weightInLbs = weight * 2.2;
  let leanMuscleMass = weightInLbs - bodyFat * 0.01 * weightInLbs;
  if (bodyFat > 5 && bodyFat < 14) {
    return leanMuscleMass * ((14 + Math.random() * 2) / 10);
  } else if (bodyFat > 14 && bodyFat < 20) {
    return leanMuscleMass * ((11 + Math.random() * 2) / 10);
  } else {
    return leanMuscleMass * 1.35;
  }
}

function calculatingFat(bodyFat, aimedCalories) {
  if (bodyFat > 25) {
    return (0.35 * aimedCalories) / 9;
  } else {
    return (0.3 * aimedCalories) / 9;
  }
}

function calculatingCarbs(aimedCalories, proteinAmt, fatAmt) {
  return (aimedCalories - (4 * proteinAmt + 9 * fatAmt)) / 4;
}

export default function calculateMyMacros(values) {
  console.log(values);
  const {
    sex,
    age,
    height,
    weight,
    workExp,
    goal,
    lifeStyle,
    name,
    workoutType,
  } = values;

  const lifeStyleMultiplier = lifeStyleMultiplierCalculator(lifeStyle);
  const BMRCalculator = calculatingBMR(sex, weight, age, height);
  const BMICalculator = calculatingBMI(weight, height);
  const bodyFat = calculatingBodyFat(sex, age, BMICalculator);

  const maintenanceCaloriesCalculator = calculatingMaintenanceCalories(
    BMRCalculator,
    lifeStyleMultiplier
  );

  const calorieYouHaveToIntake = calculatingCalorieDeficitOrSurplus(
    workExp,
    bodyFat,
    maintenanceCaloriesCalculator
  );

  const proteinAmt = calculatingProtein(bodyFat, weight);

  const fatAmt = calculatingFat(bodyFat, calorieYouHaveToIntake);

  const carbsAmt = calculatingCarbs(calorieYouHaveToIntake, proteinAmt, fatAmt);

  return [
    {
      headings: ["PersonalInfo", "Inputs Given"],
      rowDataSet: [
        { key: "Name", value: name },
        { key: "Sex", value: sex },
        { key: "Age", value: `${age} years old` },
        { key: "Height", value: `${height} centimeter` },
        { key: "Weight", value: `${weight} kg.` },
        { key: "Workout Experience", value: workExp },
        { key: "Your Goal", value: goal },
        { key: "Frequently done workout", value: workoutType },
      ],
    },
    {
      headings: ["Body Parameters", "Readings"],
      rowDataSet: [
        {
          key: "Life Style Multiplier ",
          value: Math.ceil(lifeStyleMultiplier),
        },
        { key: "Basal Metabolic Rate (BMR)", value: BMRCalculator },
        { key: "Body Mass Index (BMI)", value: BMICalculator },
        { key: "Body Fat Percentage (BF%)", value: `${bodyFat}%` },
        {
          key: "Maintenance Calories",
          value: `${Math.ceil(maintenanceCaloriesCalculator)} calories`,
        },
      ],
    },
    {
      headings: ["Macros", "Amount"],
      rowDataSet: [
        {
          key: "Aimed Calories (calories per day)",
          value: `${Math.ceil(calorieYouHaveToIntake)} calories`,
        },
        {
          key: "Protein intake (in gm/day)",
          value: `${Math.ceil(proteinAmt)} grams`,
        },
        {
          key: "Carbohydrate intake (in gm/day)",
          value: `${Math.ceil(carbsAmt)} grams`,
        },
        { key: "Fat intake (in gm/day)", value: `${Math.ceil(fatAmt)} grams` },
      ],
    },
  ];
}
