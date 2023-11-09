'use client'

import { useEffect, useState } from 'react';

import Link from '@/components/Link';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import NewsletterForm from 'pliny/ui/NewsletterForm';
import { formatDate } from 'pliny/utils/formatDate';

import CommitAPI from '@/hooks/commitAPI';

import type CommitsProps from '@/types/commit';

const owner = 'facundo-cachan';
const default_repo = 'take_home_web';
export default function Page() {
  const [commits, setCommits] = useState<CommitsProps[]>([]);

  useEffect(() => {
    CommitAPI.getCommits({ owner, repo: default_repo })
      .then(({ data }) => setCommits(() => data))
      .catch((error: unknown) => console.log(error))
  }, [])

  return <>
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {default_repo?.toUpperCase() || siteMetadata.title}
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          {siteMetadata.description}
        </p>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {!commits.length && 'No commits found.'}
        {commits.map((commits) => {
          const { sha, commit: { committer: { date }, message, verification }, html_url, parents } = commits
          return (
            <li key={sha} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6 border-red-1">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          {html_url ? (<Link
                            href={html_url}
                            className="text-gray-900 dark:text-gray-100"
                          >
                            {message}
                          </Link>) : message}

                        </h2>
                        <div className="flex flex-wrap">
                          {parents.map(({ sha, html_url }) => (
                            <Tag key={sha} text={sha.substring(0, 5)} href={html_url} />
                          ))}
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {verification.verified && "✅ "} {sha}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
    {siteMetadata.newsletter?.provider && (
      <div className="flex items-center justify-center pt-4">
        <NewsletterForm />
      </div>
    )}
  </>
}
