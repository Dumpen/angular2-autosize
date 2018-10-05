# angular-autosize

## Forked from https://github.com/markhatchell/angular2-autosize ##

***angular-autosize*** is an Angular directive that automatically adjusts textarea height to fit content.

It adjusts the textarea height automatically to any text input, or changes to the model bound to the textarea.

## Demo

[http://stevepapa.com/angular-autosize](http://stevepapa.com/angular-autosize)

## Installation:

```bash
npm install angular-autosize
```

## Use Example:

```typescript
import {Component} from '@angular/core';
import {Autosize} from 'angular-autosize';

@Component({
  template: `
    <textarea autosize class="my-textarea">Hello, this is an example of Autosize in Angular.</textarea>
  `,
  directives: [Autosize]
})

class App {

}
```

## Author

[Steve Papa](https://stevepapa.com)

## Licence

This project is licensed under the MIT license.