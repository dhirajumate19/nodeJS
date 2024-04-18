const instSchema = mongoose.Scheme({
  id: { type: String, required: true },
  userId: { type: id, required: true },
  content: { type: String, required },
  createdAt: { type: Date, required: true },
  expiredAt: { type: Date, required },
  viewers: [
    {
      userId: { type: String, required: true },
      viewedAt: { type: Date, required: true },
    },
  ],
  likes: [
    {
      userId: { type: userId },
      likedAt: { type: Date, required: trues },
    },
  ],
  comment: [
    {
      userId: { type: userId },
      comment: { type: String, required: true },
      commentedAt: { type: Date, required },
    },
  ],
  anylitics: [
    {
      viewCount: { type: Number, required: true },
      likesCount: { type: Number, required: true },
      commentCount: { type: Number, required: true },
    },
    {
      gender: [
        {
          male: { type: String, required: true },
          female: { type: String, required: true },
        },
      ],
    },
    {
      location: [
        {
          country: { type: String, required: true },
          count: { type: String, required: true },
        },
      ],
    },
    {
      ageGroup: [
        {
          range: { type: String, required: true },
          count: { type: Number, required: true },
        },
      ],
    },
    {
      engagementRate: [{ type: Number, required: true }],
    },
  ],
});

const postSchema = mongoose.Scheme({
  id: { type: String, required: true },
  userId: { type: id, required: true },
  postId: { type: String, required: true },
  postContent: { type: Image, required: true },
  postCaption: { type: String },
  location: { type: Location },
  uploadedAt: { type: Date, required: true },
  likes: [
    {
      userId: { type: String, required: true },
      count: { type: Number, required: true },
    },
  ],
  comment: [
    {
      userId: { type: String, required },
      commentContent: { type: String, required },
      commentedAt: { type: Date, required: true },
      count: { type: Number, required: true },
    },
  ],
  repost: [
    {
      userId: { type: String, required: true },
      repostedAt: { type: Date, required: true },
    },
  ],
  saved: [
    {
      userId: { type: String, required: true },
    },
  ],
  edit: [
    {
      userId: { type: userId },
      editedAt: { type: Date },
    },
  ],
});
