# Huda Studio

Huda Brain தளத்தின் **Studio** பகுதி (படம்/வீடியோ உருவாக்கி, Coder, Huda Font, Calendar, Visualisation, Mastering, Watermark decoder) — இங்கு தனிக் கோப்பாக உள்ளது.
Blogger தீமின் 2 MB வரம்பைத் தாண்டாமல் இருக்க, தீம் இந்தக் கோப்பை jsDelivr வழியாகத் தேவைப்படும்போது மட்டும் ஏற்றுகிறது.

The **Studio** part of the Huda Brain site, kept as one file so the Blogger theme stays under its 2 MB limit.

## கோப்புகள் / Files

| கோப்பு | விளக்கம் |
|---|---|
| `studio.js` | Studio-வின் முழு code (தீமின் `dd-lz-studio` பகுதி அப்படியே) |
| `VERSION` | தற்போதைய பதிப்பு |
| `CHANGELOG.md` | மாற்றங்களின் பட்டியல் |
| `tools/extract_studio.py` | பழைய தீம் XML-இலிருந்து `studio.js`-ஐ மீண்டும் பிரித்தெடுக்கும் script |
| `docs/APP-PLAN.md` | அப்ளிகேஷனாக மாற்றும் திட்டம் |

## பதிவேற்றும் முறை / Setup

1. GitHub-இல் புதிய repo உருவாக்கவும்: பெயர் `huda-studio`, **Public** (jsDelivr public repo-க்களை மட்டுமே வழங்கும்).
2. இந்த அடைவில் உள்ள எல்லாக் கோப்புகளையும் (`studio.js`, `README.md`, `VERSION`, `CHANGELOG.md`, `.gitignore`, `tools/`, `docs/`) drag & drop செய்து Commit செய்யவும்.
3. (பரிந்துரை) **Releases → Create a new release** → tag `v2.132`. பின்னர் தீமில் `@main` என்பதற்குப் பதில் `@v2.132` பயன்படுத்தலாம்; அப்போது cache பிரச்சினை இருக்காது.
4. உலாவியில் இந்த முகவரியைத் திறந்து JS காட்டுகிறதா என்று பாருங்கள்:
   `https://cdn.jsdelivr.net/gh/haris24de-afk/huda-studio@main/studio.js`
   (உங்கள் GitHub பெயர் அல்லது repo பெயர் வேறாக இருந்தால் தீமில் `HUDA_SRC` வரியில் மாற்றவும்.)
5. அதன் பிறகு தீம் `digital-dawah-theme-v2-133.xml`-ஐ Blogger-இல் ஏற்றவும்.

## புதுப்பிக்கும் முறை / Updating

- `studio.js`-ஐ மாற்றி Commit செய்யவும்.
- `@main` பயன்படுத்தினால் jsDelivr cache சுமார் 12 மணி நேரம் இருக்கும். உடனே புதுப்பிக்க இந்த முகவரியைத் திறக்கவும்:
  `https://purge.jsdelivr.net/gh/haris24de-afk/huda-studio@main/studio.js`
- Tag பயன்படுத்தினால் புதிய tag உருவாக்கி, தீமில் அந்த tag-ஐ மாற்றவும்.

## சோதனைக்கு (தீமை மாற்றாமல்) / Testing a branch

உலாவி console-இல்:

```js
localStorage.setItem('dd_lzsrc', JSON.stringify('https://cdn.jsdelivr.net/gh/haris24de-afk/huda-studio@dev/studio.js'))
```

நீக்க: `localStorage.removeItem('dd_lzsrc')`

## முக்கிய குறிப்பு / Important

- `studio.js` தனியாக இயங்காது. இது தீமின் core script-இன் உள்ளே (`eval`) இயங்குகிறது; அதன் உதவிச் செயல்களை (`$`, `S`, `P`, `t`, `AD`, `ic`, `toast` ...) பயன்படுத்துகிறது.
- Public repo என்பதால் இந்தக் code எல்லோருக்கும் தெரியும். ரகசியத் தரவு, API சாவிகளை இதில் வைக்க வேண்டாம்.
- உரிமம் (LICENSE) நீங்கள் தேர்ந்தெடுக்க வேண்டும்; அது வரை இயல்பாக "அனைத்து உரிமைகளும் ஒதுக்கப்பட்டவை".
