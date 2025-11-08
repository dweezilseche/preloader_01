# Preloader Animation

Un preloader animé moderne utilisant GSAP pour créer des animations fluides et sophistiquées.

## 🎥 Démo

<!-- Pour ajouter votre vidéo démo, utilisez l'une des options suivantes : -->

### Option 1 : Vidéo hébergée sur GitHub

```markdown
https://github.com/user-attachments/assets/your-video-file.mp4
```

### Option 2 : Vidéo YouTube

[![Démo du Preloader](https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)

### Option 3 : GIF animé

![Démo du Preloader](./demo/demo.gif)

### Option 4 : Vidéo locale (HTML5)

```html
<video width="100%" controls>
  <source src="./demo/demo.mp4" type="video/mp4" />
  Votre navigateur ne supporte pas la balise vidéo.
</video>
```

> **Note** : Remplacez les liens ci-dessus par votre propre vidéo démo une fois créée.

## ✨ Fonctionnalités

- Animation de texte avec effet de split et révélation par caractères
- Transition fluide des images avec clip-path
- Animation de zoom et de positionnement
- Optimisations de performance avec `force3D` et `will-change`
- Timeline GSAP synchronisée pour orchestrer toutes les animations
- Design responsive

## 🛠 Technologies utilisées

- **Vite** - Build tool rapide et moderne
- **GSAP** - GreenSock Animation Platform
  - SplitText - Pour les animations de texte
  - GSDevTools - Outils de développement
- **SCSS** - Préprocesseur CSS
- **JavaScript (ES6+)** - Logique et animations

## 📦 Installation

1. Clonez le repository :

```bash
git clone https://github.com/dweezilseche/preloader.git
cd preloader
```

2. Installez les dépendances :

```bash
npm install
```

## 🚀 Utilisation

### Développement

Lancez le serveur de développement :

```bash
npm run dev
```

Le projet sera accessible sur `http://localhost:5173` (ou un autre port si celui-ci est occupé).

### Production

Créez une version optimisée pour la production :

```bash
npm run build
```

### Prévisualisation

Prévisualisez la version de production :

```bash
npm run preview
```

## 📁 Structure du projet

```
preloader/
├── img/                    # Images utilisées dans le preloader
├── src/
│   ├── main.js            # Point d'entrée de l'application
│   ├── preloader.js       # Classe principale du preloader
│   ├── preloader__TEST.js # Tests/expérimentations
│   └── style.scss         # Styles SCSS
├── index.html             # Page HTML principale
├── package.json           # Dépendances et scripts
└── README.md             # Ce fichier
```

## 🎨 Animations

Le preloader comprend plusieurs animations orchestrées :

### 1. Animation du titre (`animateTitle`)

- Split du texte en caractères
- Révélation des caractères avec un effet de stagger du centre
- Opacité et translation Y pour un effet de montée

### 2. Animation des images (`animateImages`)

- Clip-path progressif pour révéler les images
- Effet de zoom initial
- Transition fluide vers l'image finale à pleine échelle

### 3. Animation de scaling du titre (`animateScaleTitle`)

- Zoom du conteneur de titre
- Translation verticale pour le positionnement final

### 4. Animation du span (`animateSpan`)

- Split du texte en caractères
- Révélation avec effet de montée

## ⚡️ Optimisations

- Utilisation de `force3D: true` pour l'accélération GPU
- Propriété `will-change` pour optimiser les performances d'animation
- Nettoyage automatique de `will-change` après les animations
- Timeline GSAP pour une synchronisation précise

## 🎯 Personnalisation

Pour personnaliser le preloader :

1. **Modifier les images** : Remplacez les images dans le dossier `img/`
2. **Ajuster les timings** : Modifiez les durées et délais dans `preloader.js`
3. **Changer les styles** : Éditez `style.scss` pour personnaliser l'apparence
4. **Textes** : Modifiez le contenu HTML dans `index.html`

## 📝 License

ISC

## 👤 Auteur

**dweezilseche**

- GitHub: [@dweezilseche](https://github.com/dweezilseche)

## 🤝 Contribution

Les contributions, issues et feature requests sont les bienvenues !

---

Projet créé dans le cadre du M1 Lead Dev Front - JS Créatif
