class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :subject
      t.text :body
      t.string :author
      t.belongs_to :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
