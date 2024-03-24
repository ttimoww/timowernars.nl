// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Post = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Post'
  /** The title of the post */
  title: string
  /** The description of the post */
  description: string
  /** The date of the post */
  date: IsoDateTimeString
  /** The tag of the post */
  tag: string
  /** MDX file body */
  body: MDX
  slug: string
}

export type Project = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Project'
  /** The title of the project */
  title: string
  /** The description of the project */
  description: string
  /** The date of the project */
  date: IsoDateTimeString
  /** The stack of the project */
  stack: string[]
  /** The image of the project */
  image: string
  /** The github link of the project */
  github?: string | undefined
  /** The link of the project */
  link?: string | undefined
  /** The twitter link of the project */
  twitter?: string | undefined
  /** MDX file body */
  body: MDX

}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Post | Project
export type DocumentTypeNames = 'Post' | 'Project'

export type NestedTypes = never
export type NestedTypeNames = never

export type DataExports = {
  allDocuments: DocumentTypes[]
  allPosts: Post[]
  allProjects: Project[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Post: Post
  Project: Project
}

export type NestedTypeMap = {

}

 