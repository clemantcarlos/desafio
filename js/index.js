'use strict';

import { headerScroll } from './headerScroll.js';
import { playVideo } from './playVideo.js';
document.addEventListener('DOMContentLoaded', () => {
  headerScroll(); 
  playVideo('.reviewPlay','.reviewVideo');
});