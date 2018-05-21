# Accelerator UI Library - React

> Cognizant Accelerator UI Component Library for use in React. Based on [Carbon-Components-React](https://github.com/carbon-design-system/carbon-components-react)

## Usage

TBD - instructions for use in your project.

## Development

We use [React Storybook](https://github.com/storybooks/react-storybook) for developing components.

1.  Clone the project:
    ```
    git clone https://github.com/CognizantStudio/accelerator-ui-library.git
    ```
2.  Install dependencies:

    ```
    $ yarn install
    ```

3.  Start the server:

    ```
    $ yarn storybook
    ```

4.  Open browser to http://localhost:9000/.
5.  Create a branch, with naming convention: `chore/component-name/description`
6.  While working on the chore/feature, add a PR with a label `(WIP)`. When ready for review, add label `Ready for Review`

#### Component Guidelines

Components for development are found in folder `/components`
The base components will get periodically updated by pulling from the repo: [Carbon-Components-React](https://github.com/carbon-design-system/carbon-components-react)
Do not edit these components directly. If you wish to create a new component, create a new directory within components with naming convention: `Cog_{Component_Name}` Only develop and update components that are prefixed with `Cog_`

#### Updating Core Components

[Carbon-Components-React](https://github.com/carbon-design-system/carbon-components-react) Is under active OS development. To benefit from these updates we will need to periodically pull updates from [Carbon-Components-React](https://github.com/carbon-design-system/carbon-components-react)

To update, follow these steps:

```
git remote add public https://github.com/carbon-design-system/carbon-components-react.git
git pull public master
git push origin master
```

Great, our private repo now has the latest code from [Carbon-Components-React](https://github.com/carbon-design-system/carbon-components-react)

#### Updating CSS

This project uses [SASS](https://sass-lang.com/)
The theme can be updated in file: `.storybook/_theme.scss`
More information on style and theming can be found here: http://carbondesignsystem.com/style/grid/design
