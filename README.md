# finicky-config-webpack
A [webpack](https://webpack.js.org) template for transpiling ES6 modules into configuration files for [Finicky](https://github.com/johnste/finicky).

## Requirements
- [Node.js](https://nodejs.org) 17.9.0
- [Finicky](https://github.com/johnste/finicky) 3.4.0 or later

## Quick Start

1. Edit files in `src` directory.
    This template contains 3 files: 
    - **`common.js`** - shared code
    - **`personal.js`** - finicky config file for personal browsing
    - **`work.js`** - finicky config for work

    Modify them to suit your use case.

2. Open a Terminal window and run
    ```sh
    npm install
    npm run build
    ```

Generated configuration files will be saved in `$HOME/.config/finicky`

If you want to add more configuration profiles, change the output directory, or make any changes to the build output, have a look at the [webpack documentation](https://webpack.js.org/concepts/) and [`webpack.config.js`](webpack.config.js) file.

## License

MIT. See [LICENSE](LICENSE).
