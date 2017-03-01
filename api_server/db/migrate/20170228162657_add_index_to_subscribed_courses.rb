class AddIndexToSubscribedCourses < ActiveRecord::Migration[5.0]
  def change
    add_index :subscribed_courses, [:user_id, :course_id], unique: true
  end
end
