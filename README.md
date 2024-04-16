# SportSee - Tableau de bord utilisateur

SportSee est une startup dédiée au coaching sportif. Ce projet est la mise en œuvre d'un tableau de bord d'analytics qui permet à l'utilisateur de suivre ses performances sportives, notamment le nombre de sessions réalisées et le nombre de calories brûlées.

## Prérequis

Pour exécuter ce projet, vous aurez besoin de Node.js et npm installés sur votre machine. Vous pouvez télécharger et installer Node.js et npm via [Node.js official website](https://nodejs.org/).

## Installation

1. **Cloner le projet** :
   git clone https://github.com/0cl0ck/SportSee.git
   cd SportSee
   
### Installer les dépendances pour le frontend :

cd frontend

npm install


### Installer les dépendances pour le backend :

cd backend/P9-front-end-dashboard

npm install

2. **Démarrage du projet** :

Pour lancer le projet, vous devez démarrer à la fois le serveur backend et le serveur de développement frontend.

Lancer le backend :

cd backend/P9-front-end-dashboard

npm start

Le serveur backend sera démarré et écoutera sur le port 3000.

Lancer le frontend :

cd frontend

npm run dev

Le serveur de développement frontend se lancera et sera accessible via http://localhost:5173.

## Fonctionnalités

Visualisation de performances : Graphiques interactifs pour suivre les performances quotidiennes de l'utilisateur.

Récapitulatif nutritionnel : Cartes d'information affichant les statistiques clés telles que les calories consommées, les protéines, les glucides et les lipides.

## Technologie

Le tableau de bord utilise React pour le frontend avec Recharts pour la visualisation des données. Le backend est construit avec Node.js.
