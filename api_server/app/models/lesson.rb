class Lesson < ApplicationRecord
  belongs_to :course
  has_many :exercises
  default_scope { order(position: :asc) }
  validates :position, uniqueness: { scope: :course }
end
