import type { Access, FieldAccess } from 'payload'

export const isAdmin = (user: unknown) =>
  Boolean(user && typeof user === 'object' && 'collection' in user && user.collection === 'admins')

export const publicOrAdmin: Access = ({ req }) =>
  isAdmin(req.user) ? true : { _status: { equals: 'published' } }

export const adminOnly: Access = ({ req }) => isAdmin(req.user)

export const userOrAdmin: Access = ({ req }) => {
  if (isAdmin(req.user)) return true
  if (!req.user || req.user.collection !== 'users') return false
  return { id: { equals: req.user.id } }
}

export const ownedByUserOrAdmin: Access = ({ req }) => {
  if (isAdmin(req.user)) return true
  if (!req.user || req.user.collection !== 'users') return false
  return { owner: { equals: req.user.id } }
}

export const adminFieldOnly: FieldAccess = ({ req }) => isAdmin(req.user)
