// Web Audio API Synthesizer for tactile UI micro-interactions
// No external audio files or dependencies required.

let audioCtx: AudioContext | null = null;
let soundEnabled = true;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export const soundManager = {
  isEnabled: () => soundEnabled,
  toggle: () => {
    soundEnabled = !soundEnabled;
    return soundEnabled;
  },
  setEnabled: (val: boolean) => {
    soundEnabled = val;
  },

  // Soft subtle click for buttons and tabs
  playClick: () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Ignore audio policy errors
    }
  },

  // Harmonic chime for copy actions or successes
  playSuccess: () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // Note 1
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "triangle";
      osc1.frequency.setValueAtTime(523.25, now); // C5
      gain1.gain.setValueAtTime(0.05, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.15);

      // Note 2
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(659.25, now + 0.08); // E5
      gain2.gain.setValueAtTime(0.05, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.25);
    } catch {
      // Ignore audio policy errors
    }
  },

  // Switch sound for theme toggle
  playSwitch: () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(540, ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch {
      // Ignore audio policy errors
    }
  }
};
