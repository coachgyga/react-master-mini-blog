# ⚛️ React Master - Mini blog: Découverte du cycle de vie (Exercice)

Dans cet énoncé tu trouvra:

1 💡 indice

## Sommaire

<!-- no toc -->
-   [Notions de l'exercice](#notions-de-lexercice)
-   [Consignes](#consignes)
-   [Correction](#correction)

## Notions de l'exercice

-   Les `props`
-   Le `state`
-   Le cycle de vie

## Consignes

Pour réaliser cet exercice, tu vas devoir suivre les instructions suivantes:

Tu peux taper la commande suivante dans ton terminal:

```bash
git clone git@github.com:Atomic-React/react-master-mini-blog.git
```

Ensuite, rends toi dans le dossier avec la commande suivante:

```bash
cd react-master-mini-blog
```

Accède à la branche de l'exercice en exécutant la commande:

```bash
git switch ex04/exercise
```

Puis installes les dépendances avec la commande:

```bash
npm install
```

Tu peux maintenant te rendre sur l'URL <http://localhost:5173>. Tu vera qu'il y a eu une légère modification: il n'y a plus l'article qui était affiché ou masqué grâce au bouton. Désormais, le bouton affiche et masque l'ensemble des onglets et des articles.

Et si tu te rends sur le fichier `Tabs.jsx`, tu verra que l'affichage du contenu dans le JSX a été remplacé par un `tabs.map`. Cette modification a été faite pour les besoins de l'exercice. Tu n'as pas besoin de t'en préoccuper ni d'y toucher.

Dans cet exercice, tu vas devoir intégrer une nouvelle fonctionnalité: afficher une horloge indiquant combien de temps l'utilisateur passe à lire un article dans les onglets.

L'idée, c'est qu'au moment où l'utilisateur charge un article, un chronomètre démarre et affiche en temps réelle la durée de consultation de l'article.

Si l'utilisateur change d'article, un nouveau chronomètre démarre.

Ce chronomètre devra être affiché juste en dessus du titre de l'article au format _"HH:mm:ss"_

Pour réaliser cet exercice, tu aura besoin de te familiariser avec ce que l'on appelle le "cycle de vie" (_"life cycle"_ en anglais) des composants.

**React** te met à disposition un _hook_ permettant d'exploiter les fonctionnalités de ce cycle de vie. Ce hook s'appelle `useEffect`.

Voici le lien vers la documentation de **React** qui parle du cycle de vie des composants: <https://react.dev/learn/lifecycle-of-reactive-effects#the-lifecycle-of-an-effect>

Voici le lien vers la documentation de **React** qui parle de `useEffect`: <https://react.dev/reference/react/useEffect>

<details>
 <summary>💡 <b>Indice</b></summary>

 > Si tu te rends compte que l'état de ton horloge ne se met pas à jour correctement, retourne sur la documentation du `useState`.
 >
 > Ceci peut t'aider: <https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state>

</details>

Bon courage ! 💪

## Correction

Tu peux consulter la correction écrite ici: <https://github.com/Atomic-React/react-master-mini-blog/tree/ex04/correction#correction>

Ou suivre la correction en vidéo ici: _Bientôt disponible_
