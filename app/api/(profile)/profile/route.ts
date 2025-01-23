import { ApiError } from '$/errors/apiError';
import { handleError } from '$/errors/handeError';
import { authService } from '$/services/auth.service';
import { userService } from '$/services/user.service';

import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const accessToken = request.headers.get('Authorization');

    if (!accessToken) throw ApiError.forbidden('Token was not provided');

    const { userId } = await authService.verifyJwt(accessToken);

    const data = await userService.findOne(userId);

    return NextResponse.json(data, {
      status: 200,
    });
  } catch (e) {
    return handleError(e);
  }
}
