#!/bin/bash

# Script de build pour PWA
echo "Building PWA..."

# Déterminer le répertoire de destination (book/ si il existe, sinon racine)
if [ -d "book" ]; then
    DEST_DIR="book"
    echo "Copie dans le répertoire book/"
else
    DEST_DIR="."
    echo "Copie dans le répertoire racine"
fi

# Copier le Service Worker à la racine
cp theme/sw.js $DEST_DIR/sw.js
echo "Service Worker copié à $DEST_DIR/"

# Copier le manifest
cp theme/manifest.json $DEST_DIR/manifest.json
echo "Manifest copié à $DEST_DIR/"

# Copier la page offline
cp theme/offline.html $DEST_DIR/offline.html
echo "Page offline copiée à $DEST_DIR/"

echo "Build PWA terminé" 