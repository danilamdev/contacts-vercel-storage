import kv from '@vercel/kv'
import { NextResponse } from 'next/server'

export async function GET () {
  try {
    const keys = await kv.keys('contact-*')
    const messages = await kv.mget(...keys)

    return NextResponse.json(messages)
  } catch (error) {
    console.log(error)
  }
}
