class AddPositionToLesson < ActiveRecord::Migration[5.0]
  def change
    add_column :lessons, :position, :integer
  end
end
