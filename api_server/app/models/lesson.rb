class Lesson < ApplicationRecord
  belongs_to :course
  has_many :exercises
  has_many :subscribed_lessons
  has_many :users, through: :subscribed_lessons, source: :user
  default_scope { order(position: :asc) }
  validates :position, uniqueness: { scope: :course }
end
