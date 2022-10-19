class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :User
  has_one :Post
end
