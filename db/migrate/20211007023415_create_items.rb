class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :food_name
      t.boolean :complete
      t.belongs_to :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
