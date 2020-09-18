"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULTSTART = exports.DEFAULTPORT = exports.DEFAULTBOOTSTRAP = void 0;
exports.DEFAULTBOOTSTRAP = "#!/usr/bin/env bash\n\nexport PORT={port}\n{start}";
exports.DEFAULTPORT = 9000;
exports.DEFAULTSTART = 'npx next start --port $PORT';
//# sourceMappingURL=bootstrap.js.map