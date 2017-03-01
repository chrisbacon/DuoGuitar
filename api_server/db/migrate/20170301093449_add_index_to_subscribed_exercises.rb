class AddIndexToSubscribedExercises < ActiveRecord::Migration[5.0]
  def change
    add_index :subscribed_exercises, [:user_id, :exercise_id], unique: true
  end
end
