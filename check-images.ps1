# Skript pro kontrolu obrázků v projektu
Write-Host "Kontroluji obrázky v projektu..." -ForegroundColor Cyan
Write-Host ""

$imagePath = "public\images\areal"
$expectedImages = @(
    "areal-zastavka.jpg",
    "hala-6-5.jpg",
    "budova-terakota.jpg",
    "budova-hneda.jpg"
)

if (Test-Path $imagePath) {
    Write-Host "Složka existuje: $imagePath" -ForegroundColor Green
    Write-Host ""
    
    $existingFiles = Get-ChildItem -Path $imagePath -File | Select-Object -ExpandProperty Name
    
    Write-Host "Nalezené soubory:" -ForegroundColor Yellow
    foreach ($file in $existingFiles) {
        Write-Host "  - $file" -ForegroundColor Gray
    }
    Write-Host ""
    
    Write-Host "Očekávané obrázky:" -ForegroundColor Yellow
    foreach ($img in $expectedImages) {
        $fullPath = Join-Path $imagePath $img
        if (Test-Path $fullPath) {
            $size = (Get-Item $fullPath).Length / 1KB
            $sizeKB = [math]::Round($size, 2)
            Write-Host "  OK: $img ($sizeKB KB)" -ForegroundColor Green
        } else {
            Write-Host "  MISSING: $img" -ForegroundColor Red
        }
    }
} else {
    Write-Host "Složka neexistuje: $imagePath" -ForegroundColor Red
    Write-Host "Vytvářím složku..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Force -Path $imagePath | Out-Null
    Write-Host "Složka vytvořena. Nahrajte obrázky do této složky." -ForegroundColor Green
}

