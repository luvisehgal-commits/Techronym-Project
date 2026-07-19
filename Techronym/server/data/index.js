import databaseEasy from "./database/easy.js";
import databaseMedium from "./database/medium.js";
import databaseHard from "./database/hard.js";

import webEasy from "./web/easy.js";
import webMedium from "./web/medium.js";
import webHard from "./web/hard.js";

import programmingEasy from "./programming/easy.js";
import programmingMedium from "./programming/medium.js";
import programmingHard from "./programming/hard.js";

import networkingEasy from "./networking/easy.js";
import networkingMedium from "./networking/medium.js";
import networkingHard from "./networking/hard.js";

import cloudEasy from "./cloud/easy.js";
import cloudMedium from "./cloud/medium.js";
import cloudHard from "./cloud/hard.js";

import cyberSecurityEasy from "./cyberSecurity/easy.js";
import cyberSecurityMedium from "./cyberSecurity/medium.js";
import cyberSecurityHard from "./cyberSecurity/hard.js";

import aiEasy from "./ai/easy.js";
import aiMedium from "./ai/medium.js";
import aiHard from "./ai/hard.js";

const questions = [
  ...databaseEasy,
  ...databaseMedium,
  ...databaseHard,

  ...webEasy,
  ...webMedium,
  ...webHard,

  ...programmingEasy,
  ...programmingMedium,
  ...programmingHard,

  ...networkingEasy,
  ...networkingMedium,
  ...networkingHard,

  ...cloudEasy,
  ...cloudMedium,
  ...cloudHard,

...cyberSecurityEasy,
...cyberSecurityMedium,
...cyberSecurityHard,

  ...aiEasy,
  ...aiMedium,
  ...aiHard,
];

export default questions;