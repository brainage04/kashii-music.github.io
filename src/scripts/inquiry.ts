const form = document.querySelector<HTMLFormElement>('#commission-form');
const serviceSelect = document.querySelector<HTMLSelectElement>('#service');
const result = document.querySelector<HTMLElement>('#brief-result');
const output = document.querySelector<HTMLElement>('#brief-output');
const copyButton = document.querySelector<HTMLButtonElement>('#copy-brief');
const copyStatus = document.querySelector<HTMLElement>('#copy-status');
const serviceLinks = document.querySelectorAll<HTMLAnchorElement>('[data-service]');

serviceLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (serviceSelect && link.dataset.service) serviceSelect.value = link.dataset.service;
  });
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const service = String(data.get('service') ?? '');
  const budget = String(data.get('budget') ?? '');
  const deadline = String(data.get('deadline') ?? '').trim() || 'Flexible / to discuss';
  const references = String(data.get('references') ?? '').trim() || 'None yet';
  const brief = String(data.get('brief') ?? '').trim();

  const message = [
    'Hi kashii — I’d like to ask about a music project.',
    '',
    `Service: ${service}`,
    `Budget: ${budget}`,
    `Ideal deadline: ${deadline}`,
    `References: ${references}`,
    '',
    'Project brief:',
    brief,
  ].join('\n');

  if (output) output.textContent = message;
  if (result) {
    result.hidden = false;
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  if (copyStatus) copyStatus.textContent = 'Brief generated';
});

copyButton?.addEventListener('click', async () => {
  const message = output?.textContent ?? '';
  if (!message) return;

  try {
    await navigator.clipboard.writeText(message);
    if (copyStatus) copyStatus.textContent = 'Copied to clipboard';
    copyButton.textContent = 'Copied';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    if (output && selection) {
      range.selectNodeContents(output);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    if (copyStatus) copyStatus.textContent = 'Select the brief above and copy it';
  }
});
