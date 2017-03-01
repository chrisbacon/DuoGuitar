class AddRatingToSubscribedExercise < ActiveRecord::Migration[5.0]
  def change
    add_column :subscribed_exercises, :rating, :integer
  end
end
