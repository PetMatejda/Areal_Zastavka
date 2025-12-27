// Mapování obrázků z webů arealzastavka.cz a mecholupskypark.cz
// Používáme placeholder obrázky, dokud nebudou skutečné obrázky dostupné

// Placeholder obrázky z Unsplash jako fallback
const placeholderImages = {
  business: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
  restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
  food: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80",
  interior: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1920&q=80",
};

export const imageSources = {
  // Areál Zastávka - použijeme placeholder, dokud nebudou skutečné obrázky dostupné
  arealLogo: [
    "https://www.arealzastavka.cz/logo.png",
    "https://www.arealzastavka.cz/images/logo.png",
    placeholderImages.business,
  ],
  arealMain: [
    "https://www.arealzastavka.cz/areal.jpg",
    "https://www.arealzastavka.cz/images/areal.jpg",
    placeholderImages.business,
  ],
  
  // Měcholupský Park - použijeme placeholder, dokud nebudou skutečné obrázky dostupné
  restaurantMain: [
    "https://www.mecholupskypark.cz/restaurant.jpg",
    "https://www.mecholupskypark.cz/images/restaurant.jpg",
    placeholderImages.restaurant,
  ],
  restaurantInterior: [
    "https://www.mecholupskypark.cz/interior.jpg",
    "https://www.mecholupskypark.cz/images/interior.jpg",
    placeholderImages.interior,
  ],
  restaurantFood: [
    "https://www.mecholupskypark.cz/food.jpg",
    "https://www.mecholupskypark.cz/images/food.jpg",
    placeholderImages.food,
  ],
};

// Funkce pro získání obrázku s fallbackem
export function getImageSrc(category: keyof typeof imageSources): string {
  // Prozatím vracíme placeholder, dokud nebudou skutečné obrázky dostupné
  // Když budou obrázky na webech, můžeme zkusit skutečné URL
  const sources = imageSources[category];
  return sources[sources.length - 1]; // Vracíme placeholder jako fallback
}

// Funkce pro kontrolu, zda máme skutečný obrázek nebo placeholder
export function isPlaceholder(url: string): boolean {
  return url.includes('unsplash.com');
}

