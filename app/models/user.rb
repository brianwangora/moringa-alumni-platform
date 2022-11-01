class User < ApplicationRecord
    include EmailValidatable

    validates :name, presence: true
    validates :email, presence: true, email: true 
    validates :username, presence: true, 

    has_secure_password

    has_many :messages
    has_many :comments

    has_many :posts
    has_many :user_groups
    has_many :groups, through: :user_groups
end
