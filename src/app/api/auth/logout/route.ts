import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const redirectURL = new URL('/', req.url)

  return NextResponse.redirect(redirectURL, {
    headers: {
      'set-cookie': `token=; path=/; max-age=0`,
    },
  })
}
