import '!style-loader!css-loader!sass-loader!../styles.scss';

import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../../../documentation.json';
setCompodocJson(docJson);
