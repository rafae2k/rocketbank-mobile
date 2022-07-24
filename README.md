<div id="top"></div>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/rafae2k/rocketbank-mobile">
    <img src="docs/assets/app-logo.svg" alt="Rocket Bank logo" height="100">
  </a>
    </br>
    </br>

  <p align="center">
    Rocket Bank is a mobile application made with React Native. You can track your portfolio performance, make deposits and withdrawals, and buy and sell stocks.
    <br />
    <br />
    <a href="https://snack.expo.dev/@rafae2k/694e1f">View Live</a>
    ·
    <a href="https://github.com/rafae2k/rocketbank-mobile/issues">Report Bug</a>
    ·
    <a href="https://github.com/rafae2k/rocketbank-mobile/issues">Request Feature</a>
  </p>
</div>

<p float="center">
  <img src="docs/assets/app-home.png" width="200" />
  <img src="docs/assets/app-buy.png" width="200" /> 
  <img src="docs/assets/app-withdraw.png" width="200" />
  <img src="docs/assets/app-demo.gif" width="185" />
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#How-it-was-made">How it was made</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#problems">Problems</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## How it was made

Rocket Bank was my second attempt at building a mobile application, my first was [Uber Clone](https://github.com/rafae2k/uber-clone).

- Used github projects to build an automated Kanban board, by creating issues/TODO's
  - requirements
  - design
  - components
  - screens
  - logic
  - issues/bug's

<p float='center'>
  <img src="docs/assets/kanban.png" width="600" alt="Github Kanban Board" />
</p>

That where being moved to the next stage soon as i opened the Pull Request, and then moved to the next stage when the Pull Request was merged into main branch.

- The standardization of the project was done with:
  - **_Commitlint_** to check the commit message following Angular's style.
  - **_lint-staged_** to ensure no lint or TypeScript errors are committed.
  - **_Prettier_** to format the code following the **_ESlint_** Standard.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- 🎯 [Typescript](https://www.typescriptlang.org/)
- 📲 [React Native](https://reactnative.dev/)
- 💅 [Styled-components](https://tailwindcss.com/)
- 🧩 [Expo](https://www.expo.dev)
- ⛵️ [React Navigation](https://reactnavigation.org/)
- 🦙 [Alpaca Market Data](https://https://alpaca.markets//)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- PROBLEMS FACED -->

### Problems

- Learn and understand **_react navigation_** lib and how to work with nested screens and routes and correctly type it.

- **_Typescript types_** and **_Eslint_** rules and configuration

- **_Styled-components:_** was difficult to know that some styles didn't work on native that I was used on web development, like `gap` and different implementation of `flex`.

- Work with native components like, `FlatList` and `ScrollView`, `KeyboardAvoidingView`, as much the project was becoming more complex, and nesting components generated errors, like `ScrollView` inside a `ScrollView`.

- **_Debugging:_** was difficult to understand how to debug the app styles and state and setup flipper to work with expo.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Expo Snack - Test the app on web or on your phone.

[Click Here to run the app on Expo Snack](https://snack.expo.dev/@rafae2k/694e1f)

- You can run on Web emulator of Expo Snack only on iOS or Android (Web doesn't work yet for this project) or on your device reading the QR code on Expo Go App.

### Prerequisites

This project use `yarn` as package manager, you can still use others managers as `npm`.

To enable `yarn` follow this steps.

```sh
corepack enable
```

You also need to install the `expo-cli`

```sh
yarn global add expo-cli
```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/rafae2k/rocketbank-mobile.git
   ```

2. Install NPM packages
   ```sh
   yarn install
   ```
3. start expo
   ```sh
   expo start
   ```
4. Running on your phone

   press `c` on terminal and read the QR code with Expo GO app installed or press `i` to run on iOS emulator (only available on MacOS) or `a` to run on Android emulator

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Create Figma prototype
- [x] Create Navigation Tabs with React Navigation
- [x] Implement screens for login, register, home, buy/sell, portfolio, market and deposit/withdraw
- [x] Add autocomplete search for stocks
- [x] Add real stock data from Alpaca Market Data
- [x] Add auth with Face Id and biometrics and save user data to secure storage
- [ ] Sign up and Integration with firebase auth
- [ ] Fix styles bug's
- [ ] Add animations to screens
- [ ] Add micro interactivity to screens (haptics)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- Email <a href="mailto:hello@rafo.work">hello@rafo.work</a>

- Linkedin [Rafael Feitoza](https://www.linkedin.com/in/eurafo/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/rafae2k/rocketbank-mobile.svg?style=for-the-badge
[forks-url]: https://github.com/rafae2k/rocketbank-mobile/fork
[stars-shield]: https://img.shields.io/github/stars/rafae2k/rocketbank-mobile.svg?style=for-the-badge
[stars-url]: https://github.com/rafae2k/rocketbank-mobile/stargazers
[issues-shield]: https://img.shields.io/github/issues/rafae2k/rocketbank-mobile.svg?style=for-the-badge
[issues-url]: https://github.com/rafae2k/rocketbank-mobile/issues
[license-shield]: https://img.shields.io/github/license/rafae2k/rocketbank-mobile.svg?style=for-the-badge
[license-url]: https://github.com/rafae2k/rocketbank-mobile/blob/main/LICENSE.txt
[product-screenshot]: docs/assets/app-gif.gif
