// ==========================================
// TEXTSCRAMBLE
// ==========================================

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#abcdefghijklmnopqrstuvwxyz';
    this.update = this.update.bind(this);
    this.targetText = '';
    this.isAnimating = false; // NEW: Track animation state
  }

  setText(newText) {
    // 1. Check if we're already animating to this exact text
    if (this.isAnimating && this.targetText === newText) {
      return; // Ignore redundant request
    }

    // 2. If we're animating to something different, clean up first
    if (this.isAnimating) {
      this.completeImmediately();
    }

    // 3. NOW start the new animation from a clean state
    this.targetText = newText;
    this.isAnimating = true; // Mark as animating

    const oldText = this.el.innerText || "";
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    this.maxEnd = 0;

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 10);
      const end = start + Math.floor(Math.random() * 12);
      if (end > this.maxEnd) this.maxEnd = end;
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  // NEW: Method to immediately complete current animation
  completeImmediately() {
    cancelAnimationFrame(this.frameRequest);
    this.el.innerText = this.targetText; // Set to clean target text
    this.isAnimating = false;
    if (this.resolve) this.resolve();
  }

  update() {
    // Defensive check: if we're no longer supposed to be animating, stop immediately
    if (!this.isAnimating) {
      return;
    }

    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (to === '\n') {
        // Never scramble the line break itself — Magdalena/Soulier must
        // stay on separate lines through every frame, not just the ends.
        output += '\n';
        complete++;
      } else if (to === ' ') {
        // Never scramble spaces either — randomChar() never returns one, so
        // mid-animation every space briefly became a junk glyph, merging
        // words into one unbroken run. That removed the wrap point the
        // browser relies on, so a long title (e.g. project 3's) could
        // temporarily need an extra line before settling back to its real
        // layout on the final frame.
        output += ' ';
        complete++;
      } else if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="scramble-char">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (this.frame >= this.maxEnd && complete === this.queue.length) {
      this.el.innerText = this.targetText;
      this.isAnimating = false; // Animation complete
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() { return this.chars[Math.floor(Math.random() * this.chars.length)]; }
}

// --- SLOWER VARIANT, WITH <br> SUPPORT ---
// Same mechanics as TextScramble, just a wider start/end range per character
// (roughly 3x the settle time) and it reads/writes innerHTML instead of
// innerText so a literal "<br>" in the target string survives as a real line
// break. Originally written for the hero name's load-in reveal; reused
// anywhere a calmer, more legible scramble is wanted over the punchier
// default (e.g. project card titles on hover — long titles read as chaotic
// noise at the base class's faster pace).
class SlowTextScramble extends TextScramble {
  constructor(el) {
    super(el);
    this.isAnimating = false; // Ensure this is initialized
  }

  setText(newText) {
    // 1. Check if we're already animating to this exact text
    if (this.isAnimating && this.targetText === newText) {
      return; // Ignore redundant request
    }

    // 2. If we're animating to something different, clean up first
    if (this.isAnimating) {
      this.completeImmediately();
    }

    // 3. NOW start the new animation from a clean state
    this.targetText = newText;
    this.isAnimating = true;

    // Usamos innerHTML para capturar los <br>
    const oldText = this.el.innerHTML || "";
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    this.maxEnd = 0;

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';

      // AUMENTO DE DURACIÓN: start 0-10 y end hasta 50 frames
      const start = Math.floor(Math.random() * 10);
      const end = start + Math.floor(Math.random() * 40);

      if (end > this.maxEnd) this.maxEnd = end;
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  completeImmediately() {
    cancelAnimationFrame(this.frameRequest);
    this.el.innerHTML = this.targetText; // Use innerHTML for <br> tags
    this.isAnimating = false;
    if (this.resolve) this.resolve();
  }

  update() {
    // Defensive check: if we're no longer supposed to be animating, stop immediately
    if (!this.isAnimating) {
      return;
    }

    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (to === ' ') {
        // Never scramble spaces — see the base class's identical fix for why
        // (word-wrap depends on the real space surviving every frame, not
        // just the final one).
        output += ' ';
        complete++;
      } else if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        // Si el destino es parte de un <br>, no ponemos caracteres aleatorios
        if (to === '<' || to === 'b' || to === 'r' || to === '>') {
           output += to;
        } else {
           output += `<span class="d">${char}</span>`;
        }
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output; // Usar innerHTML para procesar los <br>
    if (complete === this.queue.length) {
      this.el.innerHTML = this.targetText; // SET FINAL CLEAN TEXT - CRITICAL FIX
      this.isAnimating = false; // Animation complete
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
}
