# Prerequisites
- [x] [...prerequisites]
- [x] Scoured StackOverflow

## Expected vs Current Behavior

Simply put; 
SASS = styling works beautifully.
styled-components = styling broken on initial page load, but applies on HMR.

## Failure Information 

### Steps to Reproduce

1. Install via `npx create-nx-workspace@latest sass --preset=next`
Selecting SASS for styling

![image](https://user-images.githubusercontent.com/6055731/68525459-b67c5280-02f7-11ea-8c69-5130dfc12d6e.png)
(note: styled-components unavailable here)

2. Remove the scss default

![image](https://user-images.githubusercontent.com/6055731/68525561-09a2d500-02f9-11ea-9df7-4049b11a0cfe.png)

3. Add another app, selecting styled-components

![image](https://user-images.githubusercontent.com/6055731/68525571-25a67680-02f9-11ea-85f2-6ca17cdcc1e1.png)

4.  Serve and check the apps

| nx serve styled-components | nx serve sass |
| - | - |
| ![image](https://user-images.githubusercontent.com/6055731/68525625-9b124700-02f9-11ea-8584-caa88089c22a.png) | ![image](https://user-images.githubusercontent.com/6055731/68525600-5e465000-02f9-11ea-9169-63feb4430e51.png) |

### Context

- nx report
```bash
  @nrwl/angular : Not Found
  @nrwl/cli : 8.7.0
  @nrwl/cypress : 8.7.0
  @nrwl/eslint-plugin-nx : 8.7.0
  @nrwl/express : Not Found
  @nrwl/jest : 8.7.0
  @nrwl/linter : 8.7.0
  @nrwl/nest : Not Found
  @nrwl/next : 8.7.0
  @nrwl/node : Not Found
  @nrwl/react : 8.7.0
  @nrwl/schematics : Not Found
  @nrwl/tao : 8.7.0
  @nrwl/web : 8.7.0
  @nrwl/workspace : 8.7.0
  typescript : 3.4.5
```

- environment
```bash
node: v12.12.0
npm: 6.11.3
```

- 3rd-party libraries: none

- use case that failed: check above reproduction steps ☝️ 

### Failure Logs

![image](https://user-images.githubusercontent.com/6055731/68525744-de20ea00-02fa-11ea-94a8-16588ac88c89.png)
