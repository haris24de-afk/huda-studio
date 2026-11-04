# அப்ளிகேஷனாக மாற்றும் திட்டம் / App conversion plan

## தற்போதைய அமைப்பு
Blogger தீம் = **core** (முதன்மை script + CSS) + **studio.js** (தேவைப்படும்போது ஏற்றப்படும்).
`studio.js` core-இன் scope-இல் `eval` ஆவதால், அப்ளிகேஷனுக்கு core-உம் தேவை.

## படிகள்
1. இரண்டாவது repo `huda-app` (அல்லது இதே repo-வில் `app/` அடைவு) உருவாக்கவும்.
2. தீம் XML-இலிருந்து core script → `app/core.js`, CSS → `app/style.css` என்று பிரிக்கவும் (Blogger-க்கு மட்டுமான `b:` / `data:` பகுதிகளை நீக்கி).
3. `app/index.html`, `manifest.json`, `sw.js` (offline cache) சேர்க்கவும்.
4. `HUDA_SRC` என்பதை உள்ளூர் கோப்பு (`./studio.js`) ஆக மாற்றவும்; அப்போது இணையம் இல்லாமலும் Studio இயங்கும்.
5. **PWA:** PWABuilder மூலம் APK/AAB; **Capacitor:** `npx cap add android` → Android Studio-வில் build.
6. தரவு உலாவி/சாதனத்தில் (localStorage / IndexedDB) சேமிக்கப்படும்; சர்வர் தேவையில்லை.

## தனியுரிமை
- அப்ளிகேஷனுக்குள் இருக்கும் code-ஐ APK-வை பிரித்துப் பார்க்க முடியும். உண்மையான ரகசியங்களுக்குச் சர்வர் பக்கப் பாதுகாப்பு தேவை.
