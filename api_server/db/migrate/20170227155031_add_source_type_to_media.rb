class AddSourceTypeToMedia < ActiveRecord::Migration[5.0]
  def change
    add_column :media, :source_type, :string
  end
end
