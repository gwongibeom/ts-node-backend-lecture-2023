import { Schema, model } from 'mongoose'

interface Post {
  title: string
  content: string
  authorId: string
  viewCount: number
  createAt: Date
  updateAt: Date
}

const postSchema = new Schema<Post>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  authorId: { type: String, required: true },
  viewCount: { type: Number, required: true, default: 0 }
}, {
  versionKey: false,
  // timestamps: true
  timestamps: {
    createdAt: 'createAt',
    updatedAt: 'updateAt'
  }
})

export default model('Post', postSchema)
