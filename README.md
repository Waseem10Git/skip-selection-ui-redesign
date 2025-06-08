# WeWantWaste Skip Selection Page - React UI Redesign

This is a redesign of the **"Choose Your Skip Size"** page for the WeWantWaste website, implemented in React using Vite.

## 🔧 Tech Stack

- React (with Vite)
- CSS (Responsive, Mobile-first)
- Fetching skip data from: [`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft)

## 🖼️ UI Enhancements

- **Horizontal progress bar** at the top to show booking steps (responsive)
- **Modern card layout** for skip sizes (flexible and styled)
- **Footer bar appears** only when a skip is selected, with skip info and navigation buttons
- **Responsive design** for both desktop and mobile
- **Clean structure**, maintainable components

## 📁 Folder Structure

src/
  components/
  ErrorMessage/
    ErrorMessage.jsx
    ErrorMessage.css
  Loading/
    Loading.jsx
    Loading.css
  MainContent/
    MainContent.jsx
    MainContent.css
  Navigation/
    Navigation.jsx
    Navigation.css
  ProgressIndicator/
    ProgressIndicator.jsx
    ProgressIndicator.css
  SelectedSkip/
    SelectedSkip.jsx
    SelectedSkip.css
  SkipCard/
    SkipCard.jsx
    SkipCard.css
  App.jsx
  App.css
  index.css
  main.jsx

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/Waseem10Git/skip-selection-ui-redesign
```

2. Install dependencies
```
npm install
```
3. Run the app
```
npm run build
```

##🚀 Live Demo
CondSandbox: https://codesandbox.io/p/github/Waseem10Git/skip-selection-ui-redesign/main?import=true
Netifly: https://skip-selection.netlify.app/

✍️ Author
Wasim Mahmoud Ghabour
GitHub: https://github.com/Waseem10Git
