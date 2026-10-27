(() => {
  const runtime = window.REFLEXARC?.playground;
  const host = document.querySelector('#webmujoco-host');
  if (!host || runtime?.status !== 'ready' || !runtime?.url) return;
  let url;
  try { url = new URL(runtime.url, window.location.href); } catch { return; }
  if (url.protocol !== 'https:' && url.origin !== window.location.origin) return;
  const frame = document.createElement('iframe');
  frame.className = 'webmujoco-frame';
  frame.title = 'ReflexArc Interactive Demo';
  frame.loading = 'lazy';
  frame.allow = 'fullscreen';
  frame.src = url.href;
  host.replaceChildren(frame);

  const fullscreen = document.querySelector('#demo-fullscreen');
  const player = host.closest('.demo-player');
  if (fullscreen && document.fullscreenEnabled && player?.requestFullscreen) {
    fullscreen.hidden = false;
    document.addEventListener('fullscreenchange', () => {
      const expanded = document.fullscreenElement === player;
      fullscreen.querySelector('[data-fullscreen-label]').textContent = expanded ? 'Exit full screen' : 'Full screen';
      fullscreen.querySelector('[aria-hidden]').textContent = expanded ? '↙' : '↗';
    });
    fullscreen.addEventListener('click', async () => {
      try {
        if (document.fullscreenElement === player) await document.exitFullscreen();
        else await player.requestFullscreen();
      } catch {
        frame.focus();
      }
    });
  }
})();
