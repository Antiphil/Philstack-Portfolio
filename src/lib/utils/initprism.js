import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers'; // Line Numbers Plugin importieren
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
// Weitere Sprachen nach Bedarf importieren

export function initializePrism() {
	Prism.highlightAll();
}
