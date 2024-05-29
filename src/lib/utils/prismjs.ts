import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-cshtml';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup-templating';
/* TODO: Broken JSDOCS import - maybe fix in repo */
/* import 'prismjs/components/prism-jsdoc'; */

export function initializePrism() {
	Prism.highlightAll();
}
