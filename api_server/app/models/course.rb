class Course < ApplicationRecord
  has_many :lessons
  has_many :subscribed_courses
  has_many :users, through: :subscribed_courses, source: :user
end
