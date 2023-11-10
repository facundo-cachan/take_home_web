/**
 * Commits API methods.
 *
 * @constructor
 */

import { apiInstance } from '@/app/api'

import type CommitsProps from '@/types/commit'

type GetCommitsProps = { owner: string; repo: string }

class CommitAPI {
  getCommits = async ({ owner, repo }: GetCommitsProps) => {
    const data: CommitsProps[] = await apiInstance.get(
      `https://api.github.com/repos/${owner}/${repo}/commits`
    )
    // const data: any = await apiInstance.get('static/mocks/commits.json')

    return { data }
  }
}

export default new CommitAPI()
