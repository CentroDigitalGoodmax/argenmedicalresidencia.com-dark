# ==============================
# SUBIR CAMBIOS DESDE LOCAL A GITHUB
# ==============================

git add .
git commit -m "master"
git push -u origin main

# ==============================
# ACTUALIZAR REPOSITORIO EN EL SERVIDOR DESDE GITHUB
# ==============================

git pull origin main

# ==============================
# CLONAR REPOSITORIO DESDE GITHUB A LOCAL O SERVIDOR
# ==============================

git remote add origin https://@github.com/CentroDigitalGoodmax/argenmedicalresidencia.com-dark.git

git remote set-url origin https://@github.com/CentroDigitalGoodmax/argenmedicalresidencia.com-dark.git


git fetch --all

git reset --hard origin/main

# ==============================
# CREAR REPOSITORIO BASE
# ==============================

git init
git add README.md
git commit -m "master"
git branch -M main
git remote add origin https://@github.com/CentroDigitalGoodmax/argenmedicalresidencia.com-dark.git
git push -u origin main


