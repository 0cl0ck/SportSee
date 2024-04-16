// Convertit un numéro de jour de la semaine en un code abrégé en lettre
export const convertDayNumberToLetter = (dayNumber) => {
  const dayMappings = {
    1: "L",
    2: "M",
    3: "Me",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  return dayMappings[dayNumber] || "Unknown";
};

// Fonction pour traduire les types d'activité
export const translateKind = (
  kind,
  translations = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  }
) => translations[kind] || kind;

// Fonction pour reformater et traduire les données de performance
export const transformPerformanceData = (data, kindMapping) => {
  return data
    .map((item) => ({
      ...item,
      kind: translateKind(kindMapping[item.kind]), // Traduction du type d'activité
    }))
    .sort((a, b) => {
      const order = [
        "Endurance",
        "Force",
        "Énergie",
        "Intensité",
        "Vitesse",
        "Cardio",
      ];
      return order.indexOf(a.kind) - order.indexOf(b.kind); // Tri selon un ordre prédéfini
    });
};

// Définit les informations nutritionnelles dans l'état
export const transformAndSetNutritionData = (keyData, setNutritionInfo) => {
  const nutritionInfo = [
    {
      id: `${keyData.calorieCount}`,
      label: "Calories",
      value: `${keyData.calorieCount}kCal`,
      iconPath: "/energy.svg",
      bgColor: "#FBEAEA",
    },
    {
      id: `${keyData.proteinCount}`,
      label: "Protéines",
      value: `${keyData.proteinCount}g`,
      iconPath: "/chicken.svg",
      bgColor: "#E9F4FB",
    },
    {
      id: `${keyData.carbohydrateCount}`,
      label: "Glucides",
      value: `${keyData.carbohydrateCount}g`,
      iconPath: "/apple.svg",
      bgColor: "#FAF6E5",
    },
    {
      id: `${keyData.lipidCount}`,
      label: "Lipides",
      value: `${keyData.lipidCount}g`,
      iconPath: "/cheeseburger.svg",
      bgColor: "#FBEAEF",
    },
  ];

  setNutritionInfo(nutritionInfo); // Mise à jour de l'information nutritionnelle dans l'état
};
