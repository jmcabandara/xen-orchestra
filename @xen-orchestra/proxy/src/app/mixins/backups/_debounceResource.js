import Resource from 'promise-toolbox/_Resource'

export const debounceResource = (resource, delay) =>
  new Resource(resource.p, value => setTimeout(() => resource.d(value), delay))
