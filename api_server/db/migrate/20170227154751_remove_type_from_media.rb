class RemoveTypeFromMedia < ActiveRecord::Migration[5.0]
  def change
    remove_column :media, :type, :string
  end
end
