//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

'use strict';

import { v4 as uuidV4 } from 'uuid';

let storedKeys = new Map();

function storeSecret(secretName, secretValue, tags) {
  const version = uuidV4();
  const id = `https://fakekeyvault/secrets/${secretName}/${version}`;
  const secret = {
    id: id,
    value: secretValue,
    tags: tags,
  };
  storedKeys.set(id, secret);
  return id;
}

function getSecret(secretId, callback) {
  if (storedKeys.has(secretId)) {
    return callback(null, storedKeys.get(secretId));
  }
  return callback(new Error('Secret not found.'));
}

module.exports = function createFake() {
  return {
    storeSecret: storeSecret,
    getSecret: getSecret,
  };
};
