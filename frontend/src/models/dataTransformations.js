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
export const transformAndSetNutritionData = (userData, setNutritionInfo) => {
  const nutritionData = [
    {
      id: "calories",
      label: "Calories",
      value: `${userData.calorieCount}kCal`,
      iconPath: "/energy.svg",
      bgColor: "#FBEAEA",
    },
    {
      id: "proteins",
      label: "Protéines",
      value: `${userData.proteinCount}g`,
      iconPath: "/chicken.svg",
      bgColor: "#E9F4FB",
    },
    {
      id: "carbohydrates",
      label: "Glucides",
      value: `${userData.carbohydrateCount}g`,
      iconPath: "/apple.svg",
      bgColor: "#FAF6E5",
    },
    {
      id: "lipids",
      label: "Lipides",
      value: `${userData.lipidCount}g`,
      iconPath: "/cheeseburger.svg",
      bgColor: "#FBEAEF",
    },
  ];
  setNutritionInfo(nutritionData);
};

// Nouvelle fonction pour formater les données de session
export const formatSessionData = (sessions) => {
  return sessions.map((item) => {
    const dayOnly = item.day.split("-")[2];
    const formattedDay = parseInt(dayOnly, 10);
    return { ...item, day: formattedDay.toString() };
  });
};

// Nouvelle fonction pour formater les données de session moyenne
export const formatAverageSessionData = (sessions) => {
  return sessions.map((session) => ({
    ...session,
    day: convertDayNumberToLetter(session.day),
  }));
};
