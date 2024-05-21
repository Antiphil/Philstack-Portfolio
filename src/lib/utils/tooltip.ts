export function tooltip(node: HTMLElement, { text }: any) {
	let tooltipElement: any;

	function showTooltip() {
		tooltipElement = document.createElement('div');
		tooltipElement.textContent = text;
		tooltipElement.classList.add('toolPhlip');
		tooltipElement.style.position = 'absolute';
		tooltipElement.style.opacity = '0';
		tooltipElement.style.transition = 'opacity 0.2s';

		document.body.appendChild(tooltipElement);

		const { top, left, width } = node.getBoundingClientRect();
		tooltipElement.style.top = `${top - tooltipElement.offsetHeight - 15}px`;
		tooltipElement.style.left = `${left + width / 2 - tooltipElement.offsetWidth / 2}px`;

		requestAnimationFrame(() => {
			tooltipElement.style.opacity = '1';
		});
	}

	function hideTooltip() {
		if (tooltipElement) {
			tooltipElement.style.opacity = '0';
			tooltipElement.addEventListener(
				'transitionend',
				() => {
					tooltipElement.remove();
					tooltipElement = null;
				},
				{ once: true }
			);
		}
	}

	node.addEventListener('mouseenter', showTooltip);
	node.addEventListener('mouseleave', hideTooltip);

	return {
		destroy() {
			node.removeEventListener('mouseenter', showTooltip);
			node.removeEventListener('mouseleave', hideTooltip);
			if (tooltipElement) {
				tooltipElement.remove();
			}
		}
	};
}
