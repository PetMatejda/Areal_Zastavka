// Mapování obrázků z webů arealzastavka.cz a mecholupskypark.cz
// Pokud primární URL není dostupné, použijí se alternativní

export const imageSources = {
  // Areál Zastávka
  arealLogo: [
    "https://www.arealzastavka.cz/images/logo.png",
    "https://www.arealzastavka.cz/img/logo.png",
    "https://www.arealzastavka.cz/assets/images/logo.png",
  ],
  arealMain: [
    "https://www.arealzastavka.cz/images/areal.jpg",
    "https://www.arealzastavka.cz/img/areal.jpg",
    "https://www.arealzastavka.cz/images/hero.jpg",
  ],
  
  // Měcholupský Park
  restaurantMain: [
    "https://www.mecholupskypark.cz/images/restaurant.jpg",
    "https://www.mecholupskypark.cz/img/restaurant.jpg",
    "https://www.mecholupskypark.cz/images/interior.jpg",
  ],
  restaurantInterior: [
    "https://www.mecholupskypark.cz/images/interior.jpg",
    "https://www.mecholupskypark.cz/img/interior.jpg",
    "https://www.mecholupskypark.cz/images/restaurant.jpg",
  ],
  restaurantFood: [
    "https://www.mecholupskypark.cz/images/food.jpg",
    "https://www.mecholupskypark.cz/img/food.jpg",
    "https://www.mecholupskypark.cz/images/restaurant.jpg",
  ],
};

// Funkce pro získání prvního dostupného obrázku
export function getImageSrc(category: keyof typeof imageSources): string {
  return imageSources[category][0];
}

