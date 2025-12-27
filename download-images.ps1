# Skript pro stažení obrázků z webů
$ErrorActionPreference = "Continue"

# Vytvoř složky
$arealFolder = "public\images\areal"
$restaurantFolder = "public\images\restaurant"
New-Item -ItemType Directory -Force -Path $arealFolder | Out-Null
New-Item -ItemType Directory -Force -Path $restaurantFolder | Out-Null

Write-Host "Stahuji obrázky z webů..." -ForegroundColor Cyan

# Funkce pro stažení obrázku
function Download-Image {
    param(
        [string]$Url,
        [string]$OutputPath
    )
    try {
        $response = Invoke-WebRequest -Uri $Url -UseBasicParsing -ErrorAction SilentlyContinue
        if ($response.StatusCode -eq 200) {
            [System.IO.File]::WriteAllBytes($OutputPath, $response.Content)
            Write-Host "✓ Staženo: $OutputPath" -ForegroundColor Green
            return $true
        }
    } catch {
        Write-Host "✗ Chyba při stahování $Url : $_" -ForegroundColor Red
        return $false
    }
    return $false
}

# Běžné cesty k obrázkům na webech
$arealImages = @(
    "https://www.arealzastavka.cz/images/logo.png",
    "https://www.arealzastavka.cz/images/hero.jpg",
    "https://www.arealzastavka.cz/images/areal.jpg",
    "https://www.arealzastavka.cz/img/logo.png",
    "https://www.arealzastavka.cz/img/hero.jpg",
    "https://www.arealzastavka.cz/assets/images/logo.png"
)

$restaurantImages = @(
    "https://www.mecholupskypark.cz/images/logo.png",
    "https://www.mecholupskypark.cz/images/restaurant.jpg",
    "https://www.mecholupskypark.cz/images/interior.jpg",
    "https://www.mecholupskypark.cz/images/food.jpg",
    "https://www.mecholupskypark.cz/img/logo.png",
    "https://www.mecholupskypark.cz/img/restaurant.jpg"
)

# Stáhni obrázky z Areál Zastávka
Write-Host "`nStahuji obrázky z arealzastavka.cz..." -ForegroundColor Yellow
$index = 1
foreach ($imgUrl in $arealImages) {
    $filename = "areal_$index.jpg"
    if ($imgUrl -match "logo") { $filename = "logo.png" }
    Download-Image -Url $imgUrl -OutputPath "$arealFolder\$filename"
    $index++
}

# Stáhni obrázky z Měcholupský Park
Write-Host "`nStahuji obrázky z mecholupskypark.cz..." -ForegroundColor Yellow
$index = 1
foreach ($imgUrl in $restaurantImages) {
    $filename = "restaurant_$index.jpg"
    if ($imgUrl -match "logo") { $filename = "logo.png" }
    Download-Image -Url $imgUrl -OutputPath "$restaurantFolder\$filename"
    $index++
}

Write-Host ""
Write-Host "Hotovo! Obrázky jsou v složkách:" -ForegroundColor Green
Write-Host "  - $arealFolder" -ForegroundColor Cyan
Write-Host "  - $restaurantFolder" -ForegroundColor Cyan

