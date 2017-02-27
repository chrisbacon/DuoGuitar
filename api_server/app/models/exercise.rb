class Exercise < ApplicationRecord
  belongs_to :lesson
  has_one :medium
  default_scope { order(position: :asc) }
end
