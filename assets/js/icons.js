import { library, dom, config } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRightArrowLeft, faCircleCheck, faCircleInfo, faAt,
} from '@fortawesome/free-solid-svg-icons';
import {
} from '@fortawesome/free-regular-svg-icons';
import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

config.searchPseudoElements = true;

library.add(
  // Solid Icons
  faArrowRightArrowLeft, faCircleCheck, faCircleInfo, faAt,

  // Regular Icons

  // Brands
  faGithub,
);

dom.watch();
