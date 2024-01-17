import { version } from '../version/version.js';
import { say } from './say.js';
import { goldExtensionCheck } from '../../util/index.js';

say('Running Gold Version: ' + version.major + "." + version.minor);

goldExtensionCheck();
