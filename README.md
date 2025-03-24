# API d'Items

Une API RESTful pour la gestion d'items utilisant Express.js et MongoDB. Ce projet fournit un service backend simple et conteneurisé qui permet la création et la récupération d'items.

## Aperçu du Projet

Cette API fournit des points d'accès pour gérer des items avec des propriétés telles que le nom, la description et le prix. L'application est dockerisée pour un déploiement facile et utilise un pipeline CI/CD pour les builds automatisés.

## Table des Matières

- [Fonctionnalités](#fonctionnalités)
- [Stack Technique](#stack-technique)
- [Structure du Projet](#structure-du-projet)
- [Variables d'Environnement](#variables-denvironnement)
- [Mise en Route](#mise-en-route)
  - [Prérequis](#prérequis)
  - [Installation](#installation)
- [Points d'Accès API](#points-daccès-api)
- [Configuration Docker](#configuration-docker)
- [Pipeline CI/CD](#pipeline-cicd)
- [Développement](#développement)
- [Contributeurs](#contributeurs)

## Fonctionnalités

- API RESTful pour la gestion d'items
- Intégration MongoDB pour la persistance des données
- Conteneurisation Docker
- Pipeline CI/CD avec GitHub Actions
- Configuration par variables d'environnement

## Stack Technique

- **Backend**: Node.js, Express.js
- **Base de données**: MongoDB
- **Conteneurisation**: Docker, Docker Compose
- **CI/CD**: GitHub Actions

## Structure du Projet

```
.
├── app.js                  # Point d'entrée principal de l'application
├── package.json            # Dépendances et scripts du projet
├── docker-compose.yml      # Configuration Docker Compose
├── Dockerfile              # Instructions de build Docker
├── .github/workflows       # Fichiers de workflow GitHub Actions
├── database
│   └── db.js               # Configuration de connexion à la base de données
├── models
│   └── item.js             # Modèle de données pour les items
├── routes
│   └── items.js            # Routes pour les items
└── middleware
    └── validationItem.js   # Middleware de validation
```

## Variables d'Environnement

Créez un fichier `.env` dans le répertoire racine avec les variables suivantes:

```
DB_HOST=mongodb
DB_PORT=27017
DB_DATABASE=itemsdb
DB_USERNAME=root
DB_PASSWORD=example
PORT=8081
```

## Mise en Route

### Prérequis

- Node.js (v16 ou supérieur)
- Docker et Docker Compose
- MongoDB (si exécution locale sans Docker)

### Installation

1. Clonez le dépôt:
   ```
   git clone https://github.com/mathieusouflis/TP-CI-CD.git
   cd TP-CI-CD
   ```

2. Installez les dépendances:
   ```
   npm install
   ```

3. Démarrez l'application avec Docker Compose:
   ```
   docker-compose up -d
   ```

4. Ou démarrez sans Docker (nécessite MongoDB en local):
   ```
   npm start
   ```

## Points d'Accès API

### Récupérer tous les items
- **URL**: `/items`
- **Méthode**: `GET`
- **Réponse**: Tableau d'objets item

### Créer un nouvel item
- **URL**: `/items`
- **Méthode**: `POST`
- **Corps**:
  ```json
  {
    "name": "Nom de l'item",
    "description": "Description de l'item",
    "price": 19.99
  }
  ```
- **Réponse**: Objet item créé

## Configuration Docker

Le projet inclut Docker Compose pour un déploiement facile:

```bash
# Démarrer les conteneurs
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêter les conteneurs
docker-compose down
```

La configuration Docker Compose comprend:
- Un conteneur MongoDB
- Un conteneur API Node.js
- Un volume persistant pour les données MongoDB
- Configuration réseau pour la communication entre conteneurs

## Pipeline CI/CD

Le projet utilise GitHub Actions pour le CI/CD:

1. Construit l'image Docker lors d'un push ou d'une PR fusionnée sur main
2. Pousse l'image sur Docker Hub
3. Utilise des secrets pour l'authentification Docker Hub

Secrets GitHub requis:
- `DOCKERHUB_USERNAME`: Votre nom d'utilisateur Docker Hub
- `DOCKERHUB_TOKEN`: Votre token d'accès Docker Hub

## Développement

Pour le développement local:

```bash
# Exécuter en mode développement avec nodemon
npm run start-dev
```

## Contributeurs

- SOUFLIS Mathieu
- ELATTAR Loaï
- MENDY BELGHAZI Ryan-ilies Gabriel
- MATHÉ Cyril
- SORRENTINO Jules