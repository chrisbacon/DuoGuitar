class Exercise < ApplicationRecord
  belongs_to :lesson
  default_scope { order(position: :asc) }
end
