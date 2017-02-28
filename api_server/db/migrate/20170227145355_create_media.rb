class CreateMedia < ActiveRecord::Migration[5.0]
  def change
    create_table :media do |t|
      t.references :exercise, foreign_key: true
      t.string :source
      t.string :type

      t.timestamps
    end
  end
end
