# nuxt

...

## setup

```bash
npm ci
npm run setup
npm run dev
```

## widget system

if you need to split up a page into sub components, make them into *widgets*.
a widget is a component starting with an underscore `_Widget.vue`.
place this widget right next to the pages `index.vue`.
import it with a sibling path `import Widget from "./Widget.vue`.
this keeps it next to the page in the folder structure.
it also keeps it out of the global scope.

## section system

some projects use a flexible section system supported by our cms.
see: https://www.orbitype.com/documentation/JQQeDh/cookbook-sections).
data should be defined in a data object, see `index.vue` example.
we later move this data object over into our cms.
this data is then injected into the `SectionName.vue` components via props.

## copyright

All Rights Reserved

Copyright (c) 2024 Webentertainer GmbH

THE CONTENTS OF THIS PROJECT ARE PROPRIETARY AND CONFIDENTIAL.
UNAUTHORIZED COPYING, TRANSFERRING OR REPRODUCTION OF THE CONTENTS OF THIS PROJECT, VIA ANY MEDIUM IS STRICTLY
PROHIBITED.

The receipt or possession of the source code and/or any parts thereof does not convey or imply any right to use them
for any purpose other than the purpose for which they were provided to you.

The software is provided "AS IS", without warranty of any kind, express or implied, including but not limited to
the warranties of merchantability, fitness for a particular purpose and non infringement.
In no event shall the authors or copyright holders be liable for any claim, damages or other liability,
whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software
or the use or other dealings in the software.

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
software.
# anamnesis-marketing
