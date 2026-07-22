const baseUrl = import.meta.env.BASE_URL;

export const withBase = (href: string) => {
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) return href;

  const [path = '/', hash = ''] = href.split('#');
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const fullPath = normalizedPath === '/' ? `${normalizedBase}/` : `${normalizedBase}${normalizedPath}`;

  return hash ? `${fullPath}#${hash}` : fullPath;
};
