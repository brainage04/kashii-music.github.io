const statusOutput = document.querySelector<HTMLElement>('#contact-status');
const template = document.querySelector<HTMLElement>('#message-template');
const copyTemplate = document.querySelector<HTMLButtonElement>('#copy-template');
const copyDetails = document.querySelectorAll<HTMLButtonElement>('[data-copy-text]');

const copyText = async (text: string, label: string) => {
  try {
    await navigator.clipboard.writeText(text);
    if (statusOutput) statusOutput.textContent = `${label} copied to clipboard.`;
  } catch {
    if (statusOutput) statusOutput.textContent = `Couldn’t copy automatically. Select the ${label.toLowerCase()} above.`;
  }
};

copyDetails.forEach((button) => {
  button.addEventListener('click', () => {
    const text = button.dataset.copyText;
    const label = button.dataset.copyLabel ?? 'Contact detail';
    if (text) void copyText(text, label);
  });
});

copyTemplate?.addEventListener('click', () => {
  const text = template?.textContent?.trim();
  if (text) void copyText(text, 'Message template');
});
