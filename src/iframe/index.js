// TODO make iframe static so it loads faster

import 'regenerator-runtime/runtime';
import { Publisher } from 'common'; // TODO no need common?
import { auth, state } from './config';
import { documents } from './prediction';
import { preview } from './preview';

// Publish State
new Publisher({ auth, state, documents, ...preview });