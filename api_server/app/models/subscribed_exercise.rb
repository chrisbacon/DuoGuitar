class SubscribedExercise < ApplicationRecord
  belongs_to :user
  belongs_to :exercise

  validates :user, uniqueness: { scope: :exercise }
end
