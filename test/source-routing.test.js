const { test } = require('node:test');
const assert = require('assert');
const fs = require('fs');
const path = require('path');

test('routing.json exists and is valid JSON', t => {
  const routingPath = path.resolve(__dirname, '..', 'routing.json');
  assert.ok(fs.existsSync(routingPath), 'routing.json does not exist');
  const content = fs.readFileSync(routingPath, 'utf8');
  assert.doesNotThrow(() => JSON.parse(content), 'routing.json is not valid JSON');
});
