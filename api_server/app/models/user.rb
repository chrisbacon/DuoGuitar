class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
         has_many :subscribed_courses
         has_many :subscribed_lessons
         has_many :subscribed_exercises
         has_many :courses, through: :subscribed_courses, source: :course
         has_many :lessons, through: :subscribed_lessons, source: :lesson
         has_many :exercises, through: :subscribed_exercises, source: :exercise
end
