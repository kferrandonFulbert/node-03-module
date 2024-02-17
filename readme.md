# Module de Débogage

Ce module JavaScript est à titre pédagogique. Il permet de comprendre la création de module pour node ainsi que l'import dans son programme principal.

## Installation

```bash
npm install
```

## Utilisation

```javascript
var debug=require('./debug.js');

// Utilisation des méthodes de débogage
debug.info("bonjour");
debug.log(debug);
debug.error(["erreur",3,{"clef":"valeur"},[1,'a']]);
```

## Méthodes disponibles

- `log(msg)`: Enregistre un message de log dans la console.
- `info(msg)`: Enregistre un message informatif dans la console.
- `error(msg)`: Enregistre un message d'erreur dans la console.

## Auteur

Ce module a été créé par [kferrandon](https://github.com/kferrandonFulbert).

## Version

La version actuelle du module est 1.0.0.

## Licence

Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT).
