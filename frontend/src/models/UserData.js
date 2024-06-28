class UserData {
  constructor(data) {
    // Validation des données
    if (typeof data.id !== "number") throw new Error("Invalid ID");
    if (typeof data.userInfos?.firstName !== "string")
      throw new Error("Invalid first name");
    if (typeof data.userInfos?.lastName !== "string")
      throw new Error("Invalid last name");
    if (typeof data.userInfos?.age !== "number" || data.userInfos.age < 0)
      throw new Error("Invalid age");
    if (typeof data.score !== "number" && typeof data.todayScore !== "number")
      throw new Error("Invalid score");
    if (
      typeof data.keyData?.calorieCount !== "number" ||
      data.keyData.calorieCount < 0
    )
      throw new Error("Invalid calorie count");
    if (
      typeof data.keyData?.proteinCount !== "number" ||
      data.keyData.proteinCount < 0
    )
      throw new Error("Invalid protein count");
    if (
      typeof data.keyData?.carbohydrateCount !== "number" ||
      data.keyData.carbohydrateCount < 0
    )
      throw new Error("Invalid carbohydrate count");
    if (
      typeof data.keyData?.lipidCount !== "number" ||
      data.keyData.lipidCount < 0
    )
      throw new Error("Invalid lipid count");

    // Ajout des propriétés
    this.id = data.id;
    this.firstName = data.userInfos?.firstName || "";
    this.lastName = data.userInfos?.lastName || "";
    this.age = data.userInfos?.age || 0;
    this.todayScore = data.todayScore ?? data.score ?? 0;
    this.calorieCount = data.keyData?.calorieCount || 0;
    this.proteinCount = data.keyData?.proteinCount || 0;
    this.carbohydrateCount = data.keyData?.carbohydrateCount || 0;
    this.lipidCount = data.keyData?.lipidCount || 0;
  }

  getId() {
    return this.id;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getAge() {
    return this.age;
  }

  getTodayScore() {
    return this.todayScore;
  }

  getCalorieCount() {
    return this.calorieCount;
  }

  getProteinCount() {
    return this.proteinCount;
  }

  getCarbohydrateCount() {
    return this.carbohydrateCount;
  }

  getLipidCount() {
    return this.lipidCount;
  }
}
export default UserData;
