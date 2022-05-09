# Jest Demo

## Bash Architecture

- jest
- nps
- pnpm

Start Test:
`pnpm start test`

Start Test mockClear & mockReset & mockRestore:
`pnpm start test.mockcrr`

Start Test jest sandbox:
`pnpm start test.sandbox`

## Todo

- [ ] Support nested jest config files in any level directory, like eslint or editorconfig.
  - ```shell
    |-- jest.config.js
    |-- src
        |-- index.js
        |-- dirA
            |-- jest.config.js
            |-- index.js // index.js will use the nearest jest.config.js
    ```
