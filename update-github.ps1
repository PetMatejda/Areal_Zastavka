# Skript pro automatické nahrání změn na GitHub
# Spusťte: .\update-github.ps1

Write-Host "Kontroluji změny..." -ForegroundColor Cyan

# Zkontroluj, zda jsou nějaké změny
$status = git status --porcelain
if ($status) {
    Write-Host "Nalezeny změny, přidávám do Git..." -ForegroundColor Yellow
    
    # Přidat všechny změny
    git add .
    
    # Commit s časovou značkou
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    git commit -m "Update: $timestamp"
    
    # Push na GitHub
    Write-Host "Nahrávám na GitHub..." -ForegroundColor Green
    git push origin main
    
    Write-Host "✓ Změny úspěšně nahrány na GitHub!" -ForegroundColor Green
} else {
    Write-Host "Žádné změny k nahrání." -ForegroundColor Gray
}

