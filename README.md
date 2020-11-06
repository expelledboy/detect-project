# Detect Project

> Auto detect the project type from its files

### Usage

From the cli.

```sh
$ npx detect-project <filepath>

~/repo/example-app $ npx detect-project
javascript/cra

$ npx detect-project ~/repo/sprint-be
java/springboot
```

Javascript API

```javascript
import { detect } from "detect-project";

console.log(detect(__dirname));
```
