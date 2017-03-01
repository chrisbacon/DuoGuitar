class SubscribedLesson < ApplicationRecord
  belongs_to :user
  belongs_to :lesson

  validates :user, uniqueness: { scope: :lesson }
end
