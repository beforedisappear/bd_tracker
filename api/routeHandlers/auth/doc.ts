import { AuthDataReqSchema } from '$/dto/auth.dto';

import { type RouteConfig } from '@asteasolutions/zod-to-openapi';

export const PostAuthDoc: RouteConfig = {
  method: 'post',
  path: '/auth',
  tags: ['auth'],
  description: 'to get auth data',
  request: {
    body: { content: { email: { schema: AuthDataReqSchema } } },
  },
  responses: {
    204: {
      description: 'No content - successful operation',
    },
  },
};
