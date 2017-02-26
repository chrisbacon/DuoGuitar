class AddContentToExercise < ActiveRecord::Migration[5.0]
  def change
    add_column :exercises, :content, :text
  end
end
