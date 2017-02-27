class AddIndexToExercise < ActiveRecord::Migration[5.0]
  def change
    add_column :exercises, :position, :string
    add_index :exercises, :position, unique: true
  end
end
