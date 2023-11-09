/**
 * Info User API methods.
 *
 * @constructor
 */

import { apiInstance } from '@/app/api';

class UserAPI {
  getInfo = async (user: string) => {
    // const data: any = await apiInstance.get(`https://api.github.com/users/${user}`)
    const data: any = await apiInstance.get('static/mocks/user.json')

    return { data }
  }
}

export default new UserAPI()
