const loadButton = document.querySelector<HTMLButtonElement>('#load-featured-player');
const embed = document.querySelector<HTMLElement>('#featured-player-embed');

loadButton?.addEventListener('click', () => {
  if (!embed || embed.querySelector('iframe')) return;

  const playerUrl = loadButton.dataset.playerUrl;
  const trackTitle = loadButton.dataset.trackTitle;
  if (!playerUrl || !trackTitle) return;

  const iframe = document.createElement('iframe');
  iframe.title = `SoundCloud player for ${trackTitle}`;
  iframe.allow = 'autoplay';
  iframe.src = playerUrl;
  iframe.loading = 'eager';

  embed.append(iframe);
  embed.hidden = false;
  loadButton.setAttribute('aria-expanded', 'true');
  loadButton.disabled = true;
  loadButton.textContent = 'Player loaded';
});
