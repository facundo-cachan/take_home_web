type AuthorProps = {
  name: string
  email: string
  date: string
}
type TreeProps = {
  sha: string
  url: string
  html_url?: string
}
type CommitProps = {
  author: AuthorProps
  committer: AuthorProps
  message: string
  tree: TreeProps
  url: string
  comment_count: number
  verification: {
    verified: string
    reason: string
    signature: string
    payload: string
  }
}
type CommitsProps = TreeProps & {
  node_id: string
  commit: CommitProps
  comments_url: string
  author: AuthorProps | null
  committer: AuthorProps | null
  parents: TreeProps[]
}

export default CommitsProps
