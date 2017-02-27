class AddPositionToLesson < ActiveRecord::Migration[5.0]
  def change
    add_column :lessons, :position, :integer
    add_index :lessons, :position, unique: true
  end
end
