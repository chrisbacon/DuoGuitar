class CreateExercises < ActiveRecord::Migration[5.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.references :lesson, foreign_key: true
      t.integer :position

      t.timestamps
    end
  end
end
