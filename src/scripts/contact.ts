const statusOutput = document.querySelector<HTMLElement>('#contact-status');
const template = document.querySelector<HTMLElement>('#message-template');
const copyTemplate = document.querySelector<HTMLButtonElement>('#copy-template');

const copyText = async (text: string, label: string) => {
  try {
    await navigator.clipboard.writeText(text);
    if (statusOutput) statusOutput.textContent = `${label} copied to clipboard.`;
  } catch {
    if (statusOutput) statusOutput.textContent = `Couldn’t copy automatically. Select the ${label.toLowerCase()} above.`;
  }
};


copyTemplate?.addEventListener('click', () => {
  const text = template?.textContent?.trim();
  if (text) void copyText(text, 'Message template');
});
