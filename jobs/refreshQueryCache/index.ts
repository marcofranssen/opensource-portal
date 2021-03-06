//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

/*eslint no-console: ["error", { allow: ["log"] }] */

'use strict';

if (!process.env.DEBUG) {
  process.env.DEBUG = 'querycache';
}

require('painless-config-resolver')().resolve((configurationError, config) => {
  if (configurationError) {
    throw configurationError;
  }
  const args = process.argv.slice(2);
  require('./task')(config, args);
});
