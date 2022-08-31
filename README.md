# ContentBoot Demo Project

A demo project using ContentBoot as CMS.

## Demo URL

[http://demo.contentboot.com](http://demo.contentboot.com)

## Installation

1. ##### First of all, make sure you have Node JS installed. If you don't have it:

- [Download it from nodejs.org](https://nodejs.org)
- [Install it using NVM ](https://github.com/nvm-sh/nvm)
- If you're on Mac, Homebrew is a good option too:

```
brew install node
```

2. ##### Make sure you have Yarn installed, if you don't have it:

```
npm install --global yarn
```

3. ##### Clone the repo:

```
git clone https://github.com/contentboot/contentboot-demo.git
```

4. ##### Open the project folder:

```
cd contentboot-demo
```

5. ##### Install packages and dependencies:

```
yarn install
```

6. ##### Start a local dev server at `http://localhost:3000`:

```
yarn dev
```

## For production build and generating static files:

##### Build for production and launch server:

```
yarn build
```

```
yarn start
```

##### Generate static project:

```
yarn generate
```

