class AddIndexToSubscribedLessons < ActiveRecord::Migration[5.0]
  def change
    add_index :subscribed_lessons, [:user_id, :lesson_id], unique: true
  end
end
