class Comment < ApplicationRecord
  belongs_to :card
  belongs_to :user
  validates :body, length: { minimum: 1 }
end
