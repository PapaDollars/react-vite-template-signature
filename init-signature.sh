#!/bin/bash

echo "⚡ Installation des signatures 24PapaDollar..."

# Ajouter les dépendances nécessaires
npm install --save-dev @types/node

# Créer le fichier .env s'il n'existe pas
if [ ! -f .env ]; then
  echo "VITE_APP_VERSION=1.0.0" > .env
  echo "Fichier .env créé"
fi

# Mettre à jour les scripts dans package.json
npm pkg set scripts.build="vite build && node scripts/add-signature.js"

echo "✅ Toutes les signatures ont été installées avec succès!"
echo "🚀 Pour commencer: npm run dev"