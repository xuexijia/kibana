/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { deleteAll } from '../../lib';

export const CleanNodeBuildsTask = {
  description:
    'Cleaning npm from node',

  async run(config, log, build) {
    for (const platform of config.getNodePlatforms()) {
      await deleteAll(log, [
        build.resolvePathForPlatform(platform, 'node/lib/node_modules'),
        build.resolvePathForPlatform(platform, 'node/bin/npm'),
        build.resolvePathForPlatform(platform, 'node/bin/npx'),
      ]);
    }
  },
};
