@echo off
set /p msg="Masukkan pesan update (contoh: tambah file): "
git add .
git commit -m "%msg%"
git push origin main
.\gh.exe api repos/digiitaltools/ads/pages/builds --method POST
echo --- SELESAI: File sudah diupload dan HTTPS diperbarui ---
pause
