'use client'
// @ts-ignore
import { allUsers } from 'contentlayer/generated'
import { useEffect, useState } from 'react'

import { MDXLayoutRenderer } from 'pliny/mdx-components'

import UserLayout from '@/layouts/UserLayout'

import UserAPI from '@/hooks/userAPI'

import type UserProps from '@/types/user'

export default function Page() {
  const user = 'facundo-cachan'
  const bio = allUsers.find((p) => p.slug === 'default')

  const [published, setRepos] = useState<UserProps>()

  useEffect(() => {
    UserAPI.getInfo(user)
      .then(({ data }) => setRepos(() => data))
      .catch((error: unknown) => console.log(error))
  }, [])

  return published ? (
    <UserLayout info={published}>
      {bio ? <MDXLayoutRenderer code={bio.body.code} /> : <p>loading...</p>}
    </UserLayout>
  ) : null
}
