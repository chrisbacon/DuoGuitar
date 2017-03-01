class Exercise < ApplicationRecord
  belongs_to :lesson
  has_one :medium
  has_many :users, through: :subscribed_exercises, source: :user
  default_scope { order(position: :asc) }
  validates :position, uniqueness: { scope: :lesson }
end
