import { LogoutDataReqSchema } from '$/dto/auth.dto';

import { type RouteConfig } from '@asteasolutions/zod-to-openapi';

export const LogoutPathDoc: RouteConfig = {
  method: 'post',
  path: '/logout',
  description: 'to logout from profile',
  request: {
    body: {
      content: { 'application/json': { schema: LogoutDataReqSchema } },
    },
  },
  responses: {
    204: {
      description: '',
    },
  },
};
