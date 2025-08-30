# Ajustes aplicados (2025-08-30 19:17:08 UTC)

- Corrigido o ponto de entrada do app no `package.json`:
  - **De:** `"main": "expo-router/entry"`
  - **Para:** `"main": "node_modules/expo/AppEntry.js"`
  - Isso faz com que o Expo use o `App.js` (que já navega para `HomeScreen`), evitando conflito com o **expo-router**.

## Como rodar

1. Apague a pasta `node_modules` e o cache do Expo:
   ```bash
   rm -rf node_modules
   npm install
   npx expo install
   npx expo start -c
   ```
2. Se preferir usar **expo-router** no futuro, remova o `App.js` e mova o conteúdo de `screens/HomeScreen.js` para `app/index.tsx`, criando também `app/_layout.tsx` com um `<Stack />`.

> Dica: evitar manter `App.js` **e** `expo-router` juntos quando `main` aponta para `expo-router/entry`, pois o `App.js` é ignorado e a tela principal não carrega.
