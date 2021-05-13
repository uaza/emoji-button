import { SHOW_PREVIEW, HIDE_PREVIEW } from './events';
import { createElement } from './util';

import {
  CLASS_PREVIEW,
  CLASS_PREVIEW_EMOJI,
  CLASS_PREVIEW_NAME
} from './classes';

export class EmojiPreview {
  constructor(events, renderer, options) {
    this.events = events;
    this.renderer = renderer;
    this.options = options;
  }

  render() {
    const preview = createElement('div', CLASS_PREVIEW);

    this.emoji = createElement('div', CLASS_PREVIEW_EMOJI);
    preview.appendChild(this.emoji);

    this.name = createElement('div', CLASS_PREVIEW_NAME);
    preview.appendChild(this.name);

    this.events.on(SHOW_PREVIEW, emoji => this.showPreview(emoji));
    this.events.on(HIDE_PREVIEW, () => this.hidePreview());

    return preview;
  }

  showPreview(emoji) {
    this.emoji.innerHTML = this.renderer.render(
      emoji,
      false,
      this.options.twemojiOptions
    );

    this.name.innerHTML = emoji.name;
  }

  hidePreview() {
    this.emoji.innerHTML = '';
    this.name.innerHTML = '';
  }
}
