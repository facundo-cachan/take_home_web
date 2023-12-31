'use client'

import { useEffect, useState } from 'react'

import Main from './Main'

import CommitAPI from '@/hooks/commitAPI'

import type CommitsProps from '@/types/commit'

export default function Page() {
  const owner = 'facundo-cachan'
  const repo = 'take_home_web'
  const [published, setCommits] = useState<CommitsProps[]>([])

  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
    }
    CommitAPI.getCommits({ owner, repo })
      .then(({ data }) => setCommits(() => data))
      .catch((error: unknown) => console.error(error))
  }, [])

  return <Main commits={published} repo={repo} />
}
