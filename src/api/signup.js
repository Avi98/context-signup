//fake api

const sleep = t => new Promise(resolve => setTimeout(resolve, t))

async function updateUser(user, updates) {
  await sleep(1000) // simulate a real-world wait period
  if (`${updates.tagline} ${updates.bio}`.includes('fail')) {
    return Promise.reject({message: 'Something went wrong'})
  }
  return {...user, ...updates}
}

async function loginUser(user, updates) {
  await sleep(1000) // simulate a real-world wait period
  if (`${updates.tagline} ${updates.bio}`.includes('fail')) {
    return Promise.reject({message: 'Something went wrong'})
  }
  return {...user, ...updates}
}

export {updateUser, loginUser}