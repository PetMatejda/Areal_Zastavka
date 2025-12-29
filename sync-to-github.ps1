# Automatická synchronizace s GitHubem
# Tento skript pushne všechny změny do GitHubu

Write-Host "Synchronizace s GitHubem..." -ForegroundColor Cyan

# Získání aktuální větve
$branch = git symbolic-ref --short HEAD
Write-Host "Aktuální větev: $branch" -ForegroundColor Yellow

# Kontrola změn
$status = git status --porcelain
if ($status) {
    Write-Host "Nalezeny změny, přidávám do staging..." -ForegroundColor Yellow
    git add .
    
    Write-Host "Vytvářím commit..." -ForegroundColor Yellow
    $commitMessage = "Automatická synchronizace: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git commit -m $commitMessage
    
    Write-Host "Pushuji do GitHubu..." -ForegroundColor Yellow
    git push origin $branch
    
    Write-Host "✓ Synchronizace dokončena!" -ForegroundColor Green
} else {
    Write-Host "Žádné změny k synchronizaci." -ForegroundColor Gray
    
    # I tak zkusíme pushnout, pokud jsou nějaké commity
    $localCommits = git rev-list @{u}..HEAD 2>$null
    if ($localCommits) {
        Write-Host "Pushuji lokální commity..." -ForegroundColor Yellow
        git push origin $branch
        Write-Host "✓ Push dokončen!" -ForegroundColor Green
    }
}

