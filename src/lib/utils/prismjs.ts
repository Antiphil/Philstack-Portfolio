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
	function wrapCodeBlocks() {
		// Selektiere alle <pre><code> Elemente
		const codeBlocks = document.querySelectorAll('pre > code');

		codeBlocks.forEach((codeBlock) => {
			// Erstelle das äußere div mit den gewünschten Klassen
			const outerDiv = document.createElement('div');
			outerDiv.className = 'rounded-lg bg-secondary-900 p-1';

			// Erstelle das Flex-Div mit den "Licht"-Kreisen
			const flexDiv = document.createElement('div');
			flexDiv.className = 'flex gap-2 bg-secondary-900 px-2 pt-2';

			const redCircle = document.createElement('div');
			redCircle.className = 'h-3 w-3 rounded-full bg-red-300';

			const yellowCircle = document.createElement('div');
			yellowCircle.className = 'h-3 w-3 rounded-full bg-yellow-300';

			const greenCircle = document.createElement('div');
			greenCircle.className = 'h-3 w-3 rounded-full bg-green-300';

			// Füge die Kreise zum flexDiv hinzu
			flexDiv.appendChild(redCircle);
			flexDiv.appendChild(yellowCircle);
			flexDiv.appendChild(greenCircle);

			// Füge das flexDiv zum outerDiv hinzu
			outerDiv.appendChild(flexDiv);

			// Selektiere das <pre> Element
			const preElement = codeBlock.parentNode;

			if (preElement && preElement.parentNode) {
				// Füge das <pre> Element zum outerDiv hinzu
				outerDiv.appendChild(preElement.cloneNode(true));

				// Ersetze das ursprüngliche <pre> Element mit dem neuen outerDiv
				preElement.parentNode.replaceChild(outerDiv, preElement);
			}
		});
	}

	// Rufe die Funktion auf, um die Code-Blöcke zu umhüllen
	wrapCodeBlocks();
}
