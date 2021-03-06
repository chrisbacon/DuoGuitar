class AddIndexToExercise < ActiveRecord::Migration[5.0]
  def change
    add_column :exercises, :position, :integer
    add_index :exercises, [:position, :lesson_id], unique: true
  end
end
