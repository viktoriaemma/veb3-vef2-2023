## GitHub Action

## Run Jest

[GitHub Actions Marketplace: Run Jest](https://github.com/marketplace/actions/run-jest)

* Sér scripting mál sem byggir á YAML syntax

+ Búum til möppu innan verkefnis sem kallast `.github/workflows` og síðan innan hennar getum við sett allskonar, setjum test.yml fyrir `Run Jest` GitHub Action-ið.

> ATH: Action textanum var síðan breytt yfir í þann sem er að neðan. S.s. on: [push, pull_request] og ekki on: [push, pull_request] vs. bara on: [push]


```yaml
name: CI
on: [push, pull_request] # do on push and pull request
jobs:
  build:
    runs-on: ubuntu-latest # keyrir á ubuntu
    steps:
    - uses: actions/checkout@v2 # checkar út repo-ið okkar
    - name: Install modules
      run: yarn # keyrir yarn til þess að installa modulnum
    - name: Run tests
      run: yarn test # keyrir testin okkar með því að keyra yarn test
```

***

> vef2-2023-v1-synilausn-main

```yaml
name: lint-test
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
jobs:
  lint-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: yarn install

      - name: Lint
        run: yarn lint

      - name: Test
        # Run this even if linting failed
        if: always()
        run: yarn test
```