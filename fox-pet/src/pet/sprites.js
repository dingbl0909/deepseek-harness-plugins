// Six transparent state sprites, inlined by esbuild as data URLs at build time.
import idle from '../../assets/states/idle.webp';
import working from '../../assets/states/working.webp';
import waiting from '../../assets/states/waiting.webp';
import celebrate from '../../assets/states/celebrate.webp';
import sleeping from '../../assets/states/sleeping.webp';
import pat from '../../assets/states/pat.webp';

export const SPRITES = Object.freeze({ idle, working, waiting, celebrate, sleeping, pat });
export const STATES = Object.freeze(Object.keys(SPRITES));
