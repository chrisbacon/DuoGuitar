class CreateSubscribedExercises < ActiveRecord::Migration[5.0]
  def change
    create_table :subscribed_exercises do |t|
      t.references :user, foreign_key: true
      t.references :exercise, foreign_key: true

      t.timestamps
    end
  end
end
