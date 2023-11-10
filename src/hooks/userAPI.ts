/**
 * Info User API methods.
 *
 * @constructor
 */

import { apiInstance } from '@/app/api'
import type UserProps from '@/types/user'

class UserAPI {
  getInfo = async (user: string) => {
    const data: UserProps = await apiInstance.get(`https://api.github.com/users/${user}`)
    // const data: any = await apiInstance.get('static/mocks/user.json')

    return { data }
  }
}

export default new UserAPI()
