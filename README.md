# A Mobile H5 Web App Start Kit

## Components

### create react app

### react router

### react query

## Convention

## 文件规范

- Route

  - example

    - /foo

  - rule
    - kebab-case-example
      - kebab case
      - lowercase

- Page

  - example

    ```shell
    ├── FooPage
    │ └── index.js
    ```

  - rule
    - CamelCase
    - first letter uppercase
    - Page as suffix
    - `index.js` as page component itself

- Component

  - example

    ```shell
    ├── FooPage
    │ ├── components
    │ │ └── Bar
    │ │   └── index.js
    ```

  - rule
    - CamelCase
    - first letter uppercase
    - `index.js` as component itself

- Hook

  - example

    ```shell
    useFoo
        ├── index.js
        └── utils
            ├── api.js
            ├── format.js
            └── initialData.js
    ```

  - rule
    - CamelCase
    - use as prefix
    - `index.js` as hook itself
    - `utils` folder
      - api, format, initialData
